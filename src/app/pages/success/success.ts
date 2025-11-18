import { Component, AfterViewInit, Input, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success.html',
  styleUrls: ['./success.scss']
})
export class SuccessComponent implements AfterViewInit {

  @Input() isModal = false;
  @Input() paymentMethod: string = "Paid";

  orderId = Math.floor(100000 + Math.random() * 900000);
  private redirectTimer: any;

  constructor(private zone: NgZone, private router: Router) {}

  ngAfterViewInit() {
    if (!this.isModal) {
      this.redirectTimer = setTimeout(() => {
        this.zone.run(() => this.router.navigate(['/products']));
      }, 8000);
    }
  }

  continueShopping() {
    clearTimeout(this.redirectTimer);
    if (!this.isModal) this.router.navigate(['/products']);
  }

  startConfetti() {}
}
