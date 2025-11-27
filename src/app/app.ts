import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { filter } from 'rxjs/operators';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    RouterModule
  ],
  templateUrl: './app.html',
})
export class AppComponent implements OnInit {

  menuOpen = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

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
