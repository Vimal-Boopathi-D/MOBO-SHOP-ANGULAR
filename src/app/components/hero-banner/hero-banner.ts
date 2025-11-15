import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  templateUrl: './hero-banner.html',
  styleUrls: ['./hero-banner.scss']
})
export class HeroBannerComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
