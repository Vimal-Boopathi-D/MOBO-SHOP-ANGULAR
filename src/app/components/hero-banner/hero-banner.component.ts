import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent {
  @Input() image: string = '';
  @Input() video: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  ngAfterViewInit() {
  const videoEl = document.querySelector('.banner-video') as HTMLVideoElement;
  if (videoEl) {
    videoEl.muted = true;
    videoEl.play().catch(err => console.log("Autoplay blocked", err));
  }
}

}


