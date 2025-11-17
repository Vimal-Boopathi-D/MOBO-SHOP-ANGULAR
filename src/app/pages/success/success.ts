import { Component, AfterViewInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  templateUrl: './success.html',
  styleUrls: ['./success.scss']
})
export class SuccessComponent implements AfterViewInit {

  orderId = Math.floor(100000 + Math.random() * 900000);

  constructor(
    private ngZone: NgZone,
    private router: Router
  ) {}

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => this.startConfetti(), 100);
    });

    // ---------------- AUTO REDIRECT AFTER 5 SECONDS ----------------
    setTimeout(() => {
      this.router.navigate(['/products']);
    }, 8000);
  }

  startConfetti() {
    /* your confetti or tick animation logic */
  }
}
