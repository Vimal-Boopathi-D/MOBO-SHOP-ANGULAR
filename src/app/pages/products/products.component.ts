import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { HeroBannerComponent } from '../../components/hero-banner/hero-banner.component';
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

  searchText = signal("");

  onSearch(event: any) {
  this.searchText.set(event.target.value.toLowerCase());
}


  shuffleProducts() {
    this.products = this.products
      .map(item => ({ ...item, random: Math.random() }))
      .sort((a, b) => a.random - b.random)
      .map(({ random, ...rest }) => rest);
  }

  selectedCategory = signal('All');

filteredProducts = computed(() => {
  let list = this.products;

  if (this.selectedCategory() !== 'All') {
    list = list.filter(p => p.category === this.selectedCategory());
  }

  if (this.searchText()) {
    list = list.filter(p =>
      p.name.toLowerCase().includes(this.searchText()) ||
      p.desc.toLowerCase().includes(this.searchText())
    );
  }

  return list;
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
