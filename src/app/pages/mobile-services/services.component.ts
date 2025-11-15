import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from '../../components/hero-banner/hero-banner';
import { ServiceCardComponent } from '../../components/service-card/service-card';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, HeroBannerComponent, ServiceCardComponent, ScrollAnimationDirective],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    { name: 'Mobile Display Replacement', description: 'Screen replacements for cracked or broken displays.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShaR8_OTHEbDZKPDtvelqNA75DfutP6thVGw&s?auto=format&fit=crop&w=500&q=100' },
    { name: 'Battery Replacement', description: 'Fast and safe battery replacements for smartphones.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT168ZnRwHlkjkmtjavygSrR-bxX53mw6TgSg&s?auto=format&fit=crop&w=500&q=100' },
    { name: 'Electronic Board Repair', description: 'Repairing board issues for reliable performance.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCfKuOxwY2Bfv4RLzgjQ7H2aeBwmb7a9t9Q&s?auto=format&fit=crop&w=500&q=100' },
    { name: 'Water Damage Repair', description: 'We repair water damaged phones and restore them.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcNzF8_T5imLQAth48RYVBoRN8YiDOtI3WxA&s?auto=format&fit=crop&w=500&q=100' },
    { name: 'Camera Repair', description: 'Fix front and rear camera issues, lens replacements, and software calibration.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8hzqyAHN6EI0Ktk8CaCDDBPjLNyLo1FJxA&s?auto=format&fit=crop&w=500&q=100' },
    { name: 'Charging Port Repair', description: 'Replace or repair faulty charging ports and ensure proper flow.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBS7RLzX5HErY3qon_bs3xCBzaQS69a5sSA&s?auto=format&fit=crop&w=500&q=100' },
    { name: 'Speaker & Microphone Repair', description: 'Solve audio issues by repairing speakers and microphones.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg41gA5ZyXO4BfACFeMkpMlBgboefGyXQ0wA&s?auto=format&fit=crop&w=500&q=100' }
  ];
}
