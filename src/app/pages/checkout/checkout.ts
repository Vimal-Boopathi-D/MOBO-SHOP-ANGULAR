import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { SuccessComponent } from '../success/success';
import { RouterModule } from '@angular/router';
import { NgZone } from '@angular/core';

declare var Razorpay: any;

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, SuccessComponent, RouterModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.scss'],
})
export class CheckoutComponent {
  showSuccessModal = false;
  paymentMethod: string = 'Paid';

  constructor(public cart: CartService, public router: Router, private ngZone: NgZone) {}

  toastMessage = '';
  toastType = '';
  showToastBar = false;

  showToast(msg: string, type: 'error' | 'success') {
    this.toastMessage = msg;
    this.toastType = type;
    this.showToastBar = true;

    // Auto hide after 5 sec
    setTimeout(() => {
      this.showToastBar = false;
    }, 5000);
  }

  processPayment() {
    const method = (document.querySelector('input[name="pay"]:checked') as any)?.value;

    // Form data
    const name =
      (document.querySelector('input[placeholder="John Doe"]') as HTMLInputElement).value ||
      'Guest';
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

    // CASH ON DELIVERY
    if (method === 'cod') {
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
        if (response?.orderId) localStorage.setItem('last_order_id', response.orderId);
        if (response?.invoiceLink) localStorage.setItem('last_invoice_link', response.invoiceLink);

        // Save customer
        localStorage.setItem(
          'last_customer',
          JSON.stringify({ name, phone, address, city, pincode })
        );

        // 🔥 Save items WITH qty
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

        // Save amount
        localStorage.setItem('last_amount', this.cart.totalPrice().toString());

        // Clear cart
        this.cart.clearCart();

        this.showToast('Order Placed Successfully', 'success');
        this.showSuccessModal = true;
      });

      return;
    }

    // ONLINE PAYMENT (Razorpay)
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

        this.postOrderToSheet(payload).then((response: any) => {
          this.ngZone.run(() => {
            // Save order
            if (response?.orderId) localStorage.setItem('last_order_id', response.orderId);
            if (response?.invoiceLink)
              localStorage.setItem('last_invoice_link', response.invoiceLink);

            // Save customer details
            localStorage.setItem(
              'last_customer',
              JSON.stringify({ name, phone, address, city, pincode })
            );

            // 🔥 Save items WITH qty
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

            // Save total
            localStorage.setItem('last_amount', this.cart.totalPrice().toString());

            // Clear cart
            this.cart.clearCart();

            this.showToast('Payment Successful', 'success');
            this.showSuccessModal = true;
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

  private async postOrderToSheet(payload: any) {
    const APPS_SCRIPT_URL =
      'https://script.google.com/macros/s/AKfycbzg9U-pxVw6nZdRYG-8HCMQXBpuSIoYClrr9P3OdlS-HoUORWYaRy-zlglkHXyT4J0xAg/exec';

    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // IMPORTANT
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    // Browser cannot read the real JSON because of CORS
    return {
      success: true,
      orderId: 'TEMP-' + Date.now(),
      invoiceLink: '', // browser cannot get Drive link
    };
  }

  closeSuccess() {
    this.showSuccessModal = false;
  }
}
