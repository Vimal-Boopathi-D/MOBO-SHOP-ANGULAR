import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = signal<any[]>([]);

  addToCart(product: any) {
    const items = this.cartItems();
    const existing = items.find(p => p.name === product.name);

    if (existing) {
      existing.qty++;
    } else {
      items.push({ ...product, qty: 1 });
    }

    this.cartItems.set([...items]);
  }

  removeItem(name: string) {
    this.cartItems.set(this.cartItems().filter(i => i.name !== name));
  }

  updateQty(name: string, qty: number) {
    const items = this.cartItems().map(i => 
      i.name === name ? { ...i, qty } : i
    );
    this.cartItems.set(items);
  }

  clearCart() {
    this.cartItems.set([]);
  }

  totalPrice = computed(() => {
    return this.cartItems().reduce((sum, item) => 
      sum + (item.price * item.qty), 0
    );
  });
}
