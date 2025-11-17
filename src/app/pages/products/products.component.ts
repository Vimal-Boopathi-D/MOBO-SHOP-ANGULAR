import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { HeroBannerComponent } from '../../components/hero-banner/hero-banner';
import { ProductCardComponent } from '../../components/product-card/product-card';


@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [CommonModule, ScrollAnimationDirective, HeroBannerComponent, ProductCardComponent]
})
export class ProductsComponent {

  categories = [
    { label: 'All', icon: 'fa-grid-2' },
    { label: 'Mobile', icon: 'fa-mobile' },
    { label: 'Laptop', icon: 'fa-laptop' },
    { label: 'Accessories', icon: 'fa-headphones' }
  ];

  products = [
    {
      name: 'iPhone 12',
      category: 'Mobile',
      price: 25000,
      discount: 15,
      rating: 4.8,
      desc: 'OLED Display · A14 Bionic · Dual Camera',
      img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-black-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343705000'
    },
    {
      name: 'Samsung Galaxy S21',
      category: 'Mobile',
      price: 22000,
      discount: 10,
      rating: 4.5,
      desc: 'Dynamic AMOLED · 8GB RAM · 64MP Camera',
      img: 'https://m.media-amazon.com/images/I/71asXBK4i7L.jpg'
    },
    {
      name: 'Dell Inspiron 15',
      category: 'Laptop',
      price: 35000,
      discount: 20,
      rating: 4.2,
      desc: 'Intel i5 · 8GB RAM · 512GB SSD',
      img: 'https://m.media-amazon.com/images/I/51Zl9TAM8kL.jpg'
    },
    {
      name: 'Shockproof Mobile Case',
      category: 'Accessories',
      price: 500,
      discount: 30,
      rating: 4.6,
      desc: 'Shockproof · Matte Black · Anti-Slip',
      img: 'https://m.media-amazon.com/images/I/41eAMpEd1UL.jpg'
    }
  ];

  selectedCategory = signal('All');

  filteredProducts = computed(() => {
    if (this.selectedCategory() === 'All') return this.products;
    return this.products.filter(p => p.category === this.selectedCategory());
  });

  selectCategory(cat: string) {
    this.selectedCategory.set(cat);
  }
}
 