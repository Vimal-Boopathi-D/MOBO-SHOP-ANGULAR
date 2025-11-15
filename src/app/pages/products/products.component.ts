import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { HeroBannerComponent } from '../../components/hero-banner/hero-banner'; 

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [CommonModule, ScrollAnimationDirective, HeroBannerComponent]
})
export class ProductsComponent {
  categories = ['All', 'Mobile', 'Laptop', 'Accessories'];

products = [
  { 
    name: 'iPhone 12', 
    category: 'Mobile', 
    price: 25000, 
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-black-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343705000' 
  },
{ 
    name: 'Samsung Galaxy S21', 
    category: 'Mobile', 
    price: 22000, 
    img: 'https://m.media-amazon.com/images/I/71asXBK4i7L._AC_UY218_.jpg?auto=format&fit=crop&w=500&q=60'
  },
  { 
    name: 'Dell Inspiron 15', 
    category: 'Laptop', 
    price: 35000, 
    img: 'https://m.media-amazon.com/images/I/51Zl9TAM8kL.jpg?auto=format&fit=crop&w=500&q=60'
  },
  { 
    name: 'HP Pavilion 15', 
    category: 'Laptop', 
    price: 40000, 
    img: 'https://m.media-amazon.com/images/I/71RUyskVR+L._AC_UY218_.jpg?auto=format&fit=crop&w=500&q=60'
  },
  { 
    name: 'Mobile Cover', 
    category: 'Accessories', 
    price: 500, 
    img: 'https://m.media-amazon.com/images/I/41eAMpEd1UL.AC_SX250.jpg?auto=format&fit=crop&w=500&q=60'
  },
  { 
    name: 'Charger', 
    category: 'Accessories', 
    price: 800, 
    img: 'https://m.media-amazon.com/images/I/61Blek+TonL._AC_UL320_.jpg?auto=format&fit=crop&w=500&q=60'
  },
];



  selectedCategory = signal('All');

  filteredProducts = computed(() => {
    if (this.selectedCategory() === 'All') return this.products;
    return this.products.filter(p => p.category === this.selectedCategory());
  });

  selectCategory(category: string) {
    this.selectedCategory.set(category);
  }
}
