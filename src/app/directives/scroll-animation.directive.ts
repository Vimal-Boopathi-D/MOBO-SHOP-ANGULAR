import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective {
  @Input() animation: 'left' | 'right' | 'fade' = 'left';

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top <= windowHeight - 100) {
      switch(this.animation) {
        case 'left':
        case 'right':
          this.el.nativeElement.style.transform = 'translateX(0)';
          break;
        case 'fade':
          this.el.nativeElement.style.opacity = '1';
          break;
      }
      this.el.nativeElement.style.opacity = '1';
    }
  }
}
