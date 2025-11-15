import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appProductScrollAnimation]',
  standalone: true
})
export class ProductScrollAnimationDirective {
  @Input() animationType: 'left' | 'right' | 'bottom' | 'fade' = 'fade';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transition = 'all 0.9s ease';
    this.el.nativeElement.style.opacity = '0';
  }

  ngOnInit() {
    switch (this.animationType) {
      case 'left':
        this.el.nativeElement.style.transform = 'translateX(-120px)';
        break;
      case 'right':
        this.el.nativeElement.style.transform = 'translateX(120px)';
        break;
      case 'bottom':
        this.el.nativeElement.style.transform = 'translateY(120px)';
        break;
      default:
        this.el.nativeElement.style.transform = 'translateY(40px)';
        break;
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const trigger = window.innerHeight - 200;

    if (rect.top <= trigger) {
      this.el.nativeElement.style.opacity = '1';
      this.el.nativeElement.style.transform = 'translate(0,0)';
    }
  }
}
