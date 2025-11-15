import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    // ⭐ Scroll to top on every navigation
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

    // ⭐ Preload images
    this.preloadImages([
      'assets/images/service.jpg',
      'assets/images/contact-us.jpg',
      'assets/images/product.jpg',
      'assets/images/cctv.jpg',
      'assets/images/first-slide.jpg',
      'assets/images/second-slide.jpg',
      'assets/images/third-slide.jpg',
      'assets/images/laptop.jpg',
      'assets/images/mobile.jpg'
    ]);
  }
  
  preloadImages(urls: string[]) {
    urls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }
}
