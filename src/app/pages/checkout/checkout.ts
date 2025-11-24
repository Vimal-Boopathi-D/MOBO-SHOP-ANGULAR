import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { SuccessComponent } from '../success/success';
import { RouterModule } from '@angular/router';
import { NgZone } from '@angular/core';
import { LottieSectionComponent } from '../../components/lottie-section/lottie-section';
declare var Razorpay: any;

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, SuccessComponent, RouterModule,LottieSectionComponent],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.scss'],
})
export class CheckoutComponent {
  showSuccessModal = false;
  paymentMethod: string = 'Paid';

  loading: boolean = false;   // 🔥 Spinner state

  constructor(public cart: CartService, public router: Router, private ngZone: NgZone) {}

  toastMessage = '';
  toastType = '';
  showToastBar = false;

  showToast(msg: string, type: 'error' | 'success') {
    this.toastMessage = msg;
    this.toastType = type;
    this.showToastBar = true;

    setTimeout(() => {
      this.showToastBar = false;
    }, 5000);
  }

  processPayment() {
    const method = (document.querySelector('input[name="pay"]:checked') as any)?.value;

    const name =
      (document.querySelector('input[placeholder="John Doe"]') as HTMLInputElement).value || 'Guest';
    const phone =
      (document.querySelector('input[placeholder="+91 XXXXX XXXXX"]') as HTMLInputElement).value ||
      '';
    const address =
      (document.querySelector('input[placeholder="Flat 101, Main Road"]') as HTMLInputElement)
        .value || '';
    const city =
      (document.querySelector('input[placeholder="Coimbatore"]') as HTMLInputElement).value || '';
    const pincode =
      (document.querySelector('input[placeholder="641001"]') as HTMLInputElement).value || '';

    // ---------------------- CASH ON DELIVERY ----------------------
    if (method === 'cod') {
      this.loading = true;  // 🔥 Show Spinner

      this.paymentMethod = 'Cash on Delivery';

      const payload = {
        paymentId: '',
        paymentMethod: this.paymentMethod,
        name,
        phone,
        address,
        city,
        pincode,
        items: this.cart.cartItems(),
        amount: this.cart.totalPrice(),
        status: 'COD',
      };

  this.postOrderToSheet(payload).then((response: any) => {

    // ⏳ keep spinner visible for 2 secs
    setTimeout(() => {
      this.loading = false;

      this.saveOrderLocally(response.orderId, name, phone, address, city, pincode);
      this.showToast('Order Placed Successfully', 'success');
      this.showSuccessModal = true;
    }, 10000);

  });

      return;
    }

    // ---------------------- ONLINE PAYMENT (RAZORPAY) ----------------------
    const options = {
      key: 'rzp_test_RgtjTiFyCjKHbi',
      amount: this.cart.totalPrice() * 100,
      currency: 'INR',
      name: 'Mobo Shop',
      description: 'Order Payment',

      handler: (razorResponse: any) => {
        const paymentId = razorResponse.razorpay_payment_id || '';
        this.paymentMethod = 'Paid Online';

        const payload = {
          paymentId,
          paymentMethod: this.paymentMethod,
          name,
          phone,
          address,
          city,
          pincode,
          items: this.cart.cartItems(),
          amount: this.cart.totalPrice(),
          status: 'Paid',
        };

        this.loading = true;

this.postOrderToSheet(payload).then((response: any) => {
  this.ngZone.run(() => {

    setTimeout(() => {
      this.loading = false;

      this.saveOrderLocally(
        response.orderId,
        name,
        phone,
        address,
        city,
        pincode
      );

      this.showToast('Payment Successful', 'success');
      this.showSuccessModal = true;

    }, 10000); // same delay

  });
});

      },

      modal: {
        ondismiss: () => {
          this.ngZone.run(() => {
            this.showToast('Payment was cancelled or failed', 'error');
          });
        },
      },

      theme: { color: '#ff7a1a' },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  }

  // ------------------------- SAVE ORDER LOCALLY -------------------------
  saveOrderLocally(orderId: string, name: string, phone: string, address: string, city: string, pincode: string) {
    localStorage.setItem('last_order_id', orderId);

    localStorage.setItem(
      'last_customer',
      JSON.stringify({ name, phone, address, city, pincode })
    );

    localStorage.setItem(
      'last_items',
      JSON.stringify(
        this.cart.cartItems().map((i) => ({
          name: i.name,
          price: i.price,
          qty: i.qty,
        }))
      )
    );

    localStorage.setItem('last_amount', this.cart.totalPrice().toString());

    this.cart.clearCart();
  }

  // ------------------------- FIXED API CALL (instant) -------------------------
  private async postOrderToSheet(payload: any) {
    const APPS_SCRIPT_URL =
      'https://script.google.com/macros/s/AKfycbzg9U-pxVw6nZdRYG-8HCMQXBpuSIoYClrr9P3OdlS-HoUORWYaRy-zlglkHXyT4J0xAg/exec';

    // 🚀 DO NOT WAIT for Google Script
    fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    // Return fake response immediately
    return {
      success: true,
      orderId: 'TEMP-' + Date.now(),
      invoiceLink: '',
    };
  }

  closeSuccess() {
    this.showSuccessModal = false;
  }
}
