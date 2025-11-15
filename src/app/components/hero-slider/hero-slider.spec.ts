import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-slider.html',
  styleUrls: ['./hero-slider.scss']
})
export class HeroSliderComponent {
  slides = [
    {
      img: 'https://images.unsplash.com/photo-1580910051073-796c42a7dfb7?auto=format&fit=crop&w=1200&q=80',
      title: 'Repair, Install, and Maintain',
      subtitle: 'Your devices serviced at minimal cost'
    },
    {
      img: 'https://images.unsplash.com/photo-1581093448794-cbcd0a091a39?auto=format&fit=crop&w=1200&q=80',
      title: 'Laptop Repairs & Upgrades',
      subtitle: 'High-quality service for all laptops'
    },
    {
      img: 'https://images.unsplash.com/photo-1606813904936-308ba2de2a57?auto=format&fit=crop&w=1200&q=80',
      title: 'CCTV Installation',
      subtitle: 'Secure your home and office'
    }
  ];

  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}
