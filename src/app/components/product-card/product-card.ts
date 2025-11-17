import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.scss']
})
export class ProductCardComponent {

  @Input() product: any;

  constructor(private cart: CartService) {}

  // ✔ Final discounted price
  getFinalPrice(): number {
    return Math.round(
      this.product.price - (this.product.price * this.product.discount / 100)
    );
  }

  // ✔ Add to cart
  addToCart() {
    this.cart.addToCart(this.product);
  }
}
