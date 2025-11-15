import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-slider.html',
  styleUrls: ['./hero-slider.scss']
})
export class HeroSliderComponent implements OnInit {
  slides = [
    {
      img: 'assets/images/first-slide.jpg',
      title: 'Repair, Install, and Maintain',
      subtitle: 'Your devices serviced at minimal cost'
    },
    {
      img: 'assets/images/second-slide.jpg',
      title: 'Laptop Repairs & Upgrades',
      subtitle: 'High-quality service for all laptops'
    },
    {
      img: 'assets/images/third-slide.jpg',
      title: 'CCTV Installation',
      subtitle: 'Secure your home and office'
    }
  ];

  currentSlide = 0;
  intervalId!: any;

  ngOnInit() {
    this.intervalId = setInterval(() => this.nextSlide(), 3000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
