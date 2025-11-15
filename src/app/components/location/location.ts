import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import lottie, { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location.html',
  styleUrls: ['./location.scss']
})
export class LocationComponent implements OnInit {
  @ViewChild('lottieContainer', { static: true }) lottieContainer!: ElementRef;
  private animation!: AnimationItem;

  ngOnInit() {
    this.animation = lottie.loadAnimation({
      container: this.lottieContainer.nativeElement,
      path: 'assets/animations/Bouncy Mapmaker.json',
      renderer: 'svg',
      loop: true,
      autoplay: true
    });
  }
}
