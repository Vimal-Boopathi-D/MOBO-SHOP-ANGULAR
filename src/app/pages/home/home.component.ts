import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSliderComponent } from '../../components/hero-slider/hero-slider';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { LocationComponent } from '../../components/location/location';
import { LottieSectionComponent } from '../../components/lottie-section/lottie-section';
import { RouterModule } from '@angular/router'; 
import { ProductScrollAnimationDirective } from '../../directives/product-scroll-animation.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroSliderComponent, ScrollAnimationDirective,LocationComponent,LottieSectionComponent,RouterModule,ProductScrollAnimationDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products = [
    { name: 'Second-hand Mobile', 
      description: 'High quality refurbished phones',
       img: 'assets/images/mobile.jpg'
       },
    { name: 'Laptops',
       description: 'Refurbished laptops',
       img: 'assets/images/laptop.jpg'
       },
    { name: 'CCTV Systems',
       description: 'Secure your home & office',
        img: 'assets/images/cctv.jpg'
      }
  ];
}
