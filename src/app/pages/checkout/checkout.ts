import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { SuccessComponent } from '../success/success';
import { RouterModule } from '@angular/router';

declare var Razorpay: any;

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, SuccessComponent,RouterModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.scss'],
})
export class CheckoutComponent {

  showSuccessModal = false;
  paymentMethod: string = "Paid";

  constructor(public cart: CartService,  public router: Router ) {}

  processPayment() {
    const method = (document.querySelector('input[name="pay"]:checked') as any)?.value;

    if (method === 'cod') {
      this.paymentMethod = "Cash on Delivery";
      this.cart.clearCart();
      this.showSuccessModal = true;
      return;
    }

    const razor = new Razorpay({
      key: 'rzp_test_RgtjTiFyCjKHbi',
      amount: this.cart.totalPrice() * 100,
      currency: 'INR',
      name: 'Mobo Shop',
      description: 'Order Payment',

      handler: () => {
        this.paymentMethod = "Paid Online";
        this.cart.clearCart();
        this.showSuccessModal = true;
      }
    });

    razor.on('payment.failed', () => alert('❌ Payment Failed'));
    razor.open();
  }

  closeSuccess() {
    this.showSuccessModal = false;
  }
}
