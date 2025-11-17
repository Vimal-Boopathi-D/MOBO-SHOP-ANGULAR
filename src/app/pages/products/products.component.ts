import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { HeroBannerComponent } from '../../components/hero-banner/hero-banner';
import { ProductCardComponent } from '../../components/product-card/product-card';
import { PRODUCTS_DATA } from '../../products.data';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [
    CommonModule,
    ScrollAnimationDirective,
    HeroBannerComponent,
    ProductCardComponent,
    RouterModule
  ]
})
export class ProductsComponent {

  categories = [
    { label: 'All', icon: 'fa-grid-2' },
    { label: 'Brand New Mobiles', icon: 'fa-mobile-screen' },
    { label: 'Second Hand Mobiles', icon: 'fa-mobile-retro' },
    { label: 'Brand New Laptops', icon: 'fa-laptop-code' },
    { label: 'Second Hand Laptops', icon: 'fa-laptop' },
    { label: 'Accessories', icon: 'fa-headphones' }
  ];

  products = [...PRODUCTS_DATA];

  constructor(public cart: CartService) {
    this.shuffleProducts();
    this.setupStickyScroll();
  }

  shuffleProducts() {
    this.products = this.products
      .map(item => ({ ...item, random: Math.random() }))
      .sort((a, b) => a.random - b.random)
      .map(({ random, ...rest }) => rest);
  }

  selectedCategory = signal('All');

  filteredProducts = computed(() => {
    if (this.selectedCategory() === 'All') return this.products;
    return this.products.filter(p => p.category === this.selectedCategory());
  });

  selectCategory(cat: string) {
    this.selectedCategory.set(cat);
  }

  // CART DRAWER SIGNAL
  drawerOpen = signal(false);

  openCartDrawer() {
    this.drawerOpen.set(true);
  }

  closeCartDrawer() {
    this.drawerOpen.set(false);
  }

  // STICKY CART BUTTON
  isSticky = signal(false);

  setupStickyScroll() {
    window.addEventListener('scroll', () => {
      this.isSticky.set(window.scrollY > 200);
    });
  }
}
