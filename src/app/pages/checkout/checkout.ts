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

      this.postOrderToSheet(payload).then(() => {
        this.showToast('Order Placed Successfully', 'success');
        this.cart.clearCart();
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

        this.postOrderToSheet(payload).then(() => {
          this.ngZone.run(() => {
            this.showToast('Payment Successful', 'success');
            this.cart.clearCart();
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
    // rzp.on('payment.failed', (resp: any) => {
    //   this.showToast(resp.error?.description || 'Payment Failed. Please try again.', 'error');
    // });

    rzp.open();
  }

  // FINAL WORKING VERSION (NO-CORS)
  private async postOrderToSheet(payload: any) {
    const APPS_SCRIPT_URL =
      'https://script.google.com/macros/s/AKfycbyUO-dCWFTEtx6HlyHDfkjH0I-x1aMA27q7gCaf6Dqt81Bh6KpqPIQ8jOtLTmG_qOm8Jg/exec';

    // CORS bypass mode
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // ⬅ IMPORTANT FIX
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // no-cors returns an empty response → we return true always
    return true;
  }

  closeSuccess() {
    this.showSuccessModal = false;
  }
}
