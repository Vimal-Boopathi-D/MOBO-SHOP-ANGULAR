import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

declare var Razorpay: any;

@Component({
  selector: 'app-checkout',
  standalone: true,
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.scss'],
})
export class CheckoutComponent {
  constructor(public cart: CartService, private router: Router) {}

  processPayment() {
    const method = (document.querySelector('input[name="pay"]:checked') as any).value;

    // ------------------------
    // CASH ON DELIVERY
    // ------------------------
    if (method === 'cod') {
      this.cart.clearCart();
      this.router.navigate(['/success'], {
        queryParams: { method: 'COD' },
      });
      return;
    }

    // ------------------------
    // RAZORPAY PAYMENT GATEWAY
    // ------------------------
    const options = {
      key: 'rzp_test_RgtjTiFyCjKHbi',
      amount: this.cart.totalPrice() * 100,
      currency: 'INR',
      name: 'My Shop',
      description: 'Order Payment',

      handler: () => {
        this.cart.clearCart();
        this.router.navigate(['/success'], {
          queryParams: { method: 'ONLINE' },
        });
      },
      prefill: {
        name: 'Test User',
        email: 'test@example.com',
        contact: '9876543210',
      },
    };

    const razor = new Razorpay(options);

    razor.on('payment.failed', () => {
      alert('Payment Failed ❌');
    });

    razor.open();
  }
}
