import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import lottie, { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-lottie-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lottie-section.html',
  styleUrls: ['./lottie-section.scss']
})
export class LottieSectionComponent implements OnInit {
  @Input() animationPath!: string; // JSON file path
  @Input() title!: string;         // Title text
  @Input() content!: string;       // Content text
  @Input() reverse: boolean = false; // Optional: flip animation/text sides

  @ViewChild('lottieContainer', { static: true }) lottieContainer!: ElementRef;
  private animation!: AnimationItem;

  ngOnInit() {
    if (!this.animationPath) return;

    this.animation = lottie.loadAnimation({
      container: this.lottieContainer.nativeElement,
      path: this.animationPath,
      renderer: 'svg',
      loop: true,
      autoplay: true
    });
  }
}
