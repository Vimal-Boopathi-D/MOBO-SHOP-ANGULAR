import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective {
  @Input() animation: 'left' | 'right' | 'fade' = 'left';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transition = 'all 0.8s ease';
    this.el.nativeElement.style.opacity = '0';
    this.el.nativeElement.style.transform =
      this.animation === 'right'
        ? 'translateX(80px)'
        : this.animation === 'left'
        ? 'translateX(-80px)'
        : 'translateY(20px)';
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // ⭐ Animate earlier
    const triggerPoint = windowHeight - 300;

    if (rect.top <= triggerPoint) {
      switch (this.animation) {
        case 'left':
        case 'right':
          this.el.nativeElement.style.transform = 'translateX(0)';
          break;
        case 'fade':
          this.el.nativeElement.style.transform = 'translateY(0)';
          break;
      }
      this.el.nativeElement.style.opacity = '1';
    }
  }
}
