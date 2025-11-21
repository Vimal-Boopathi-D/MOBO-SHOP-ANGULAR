import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LottieSectionComponent } from '../../components/lottie-section/lottie-section';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, LottieSectionComponent, FormsModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss']
})
export class CartComponent {

  couponCode: string = "";
  couponApplied = false;
  invalidCoupon = false;

  couponDiscount = 0;
  tax = 0;
  finalAmount = 0;

  constructor(
    public cart: CartService,
    private router: Router
  ) {}

  goToCheckout() {
    this.router.navigate(['/checkout']);
  }

  ngDoCheck() {
    this.calculateAmounts();
  }

  applyCoupon() {
    const subtotal = this.cart.totalPrice();

    if (subtotal === 0) {
      this.invalidCoupon = true;
      this.couponApplied = false;
      this.couponDiscount = 0;
      return;
    }

    const code = this.couponCode.trim().toUpperCase();

    this.couponApplied = false;
    this.invalidCoupon = false;
    this.couponDiscount = 0;

    switch (code) {
      case "MOBILE10":
        this.couponApplied = true;
        this.couponDiscount = subtotal * 0.10;
        break;

      case "SUPERSAVE":
        this.couponApplied = true;
        this.couponDiscount = subtotal * 0.15;
        break;

      case "NEWUSER":
        this.couponApplied = true;
        this.couponDiscount = subtotal * 0.20;
        break;

      case "FLAT100":
        this.couponApplied = true;
        this.couponDiscount = 100;
        break;

      case "":
        return;

      default:
        this.invalidCoupon = true;
        return;
    }

    this.calculateAmounts();
  }

  calculateAmounts() {
    const subtotal = this.cart.totalPrice();

    if (subtotal === 0) {
      this.finalAmount = 0;
      return;
    }
    this.finalAmount = subtotal - this.couponDiscount;
  }

}
