import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/mobile-services/services.component';
import { ContactComponent } from './pages/contact/contact.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
];
