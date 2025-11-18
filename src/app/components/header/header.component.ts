import { Component, HostListener, signal } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isScrolled = signal(false);
  darkNav = signal(false);   // ⭐ automatically switch nav mode
  menuOpen = false;
  dropdownOpen = false;

  constructor(private router: Router) {
    // Detect page changes to apply dark or transparent navbar
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        
        const currentRoute = event.urlAfterRedirects;

        // Pages that should have TRANSPARENT NAVBAR
        const transparentPages = ['/', '/home'];

        // All other pages = dark navbar
        this.darkNav.set(!transparentPages.includes(currentRoute));
      });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

}
