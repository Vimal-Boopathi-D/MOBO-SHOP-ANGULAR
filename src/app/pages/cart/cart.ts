import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LottieSectionComponent } from '../../components/lottie-section/lottie-section';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,LottieSectionComponent],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss']
})
export class CartComponent {

  constructor(
    public cart: CartService,
    private router: Router
  ) {}

  goToCheckout() {
    this.router.navigate(['/checkout']);
  }
}
