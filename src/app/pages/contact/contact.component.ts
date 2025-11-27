import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroBannerComponent } from '../../components/hero-banner/hero-banner.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,HeroBannerComponent]
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  submitted: boolean = false;

  submitForm() {
    if (this.name && this.email && this.message) {
      this.submitted = true;
      console.log('Form submitted:', { name: this.name, email: this.email, message: this.message });
      this.name = '';
      this.email = '';
      this.message = '';
      setTimeout(() => this.submitted = false, 3000); 
    }
  }
}
