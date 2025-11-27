import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from '../../components/hero-banner/hero-banner.component';
import { ServiceCard } from '../../components/service-card/service-card';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, HeroBannerComponent, ServiceCard, ScrollAnimationDirective],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
services = [
  {
    name: 'Mobile Display Replacement',
    backText: 'We replace damaged or cracked displays using premium OEM parts, ensuring excellent touch response, vibrant colors, and long-term durability.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShaR8_OTHEbDZKPDtvelqNA75DfutP6thVGw&s?auto=format&fit=crop&w=500&q=100'
  },

  {
    name: 'Battery Replacement',
    backText: 'Our high-capacity batteries restore your phone’s backup and provide safe, reliable power for long-term usage.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT168ZnRwHlkjkmtjavygSrR-bxX53mw6TgSg&s?auto=format&fit=crop&w=500&q=100'
  },

  {
    name: 'Electronic Board Repair',
    backText: 'Chip-level motherboard issues are repaired using advanced equipment and performance without costly part replacements.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCfKuOxwY2Bfv4RLzgjQ7H2aeBwmb7a9t9Q&s?auto=format&fit=crop&w=500&q=100'
  },

  {
    name: 'Water Damage Repair',
    backText: 'We clean corrosion, remove moisture, and repair damaged components to recover phones affected by water effectively.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcNzF8_T5imLQAth48RYVBoRN8YiDOtI3WxA&s?auto=format&fit=crop&w=500&q=100'
  },

  {
    name: 'Camera Repair',
    backText: 'From blurry images to malfunctioning lenses, we repair camera issues and perform calibration to restore perfect photo and video quality.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8hzqyAHN6EI0Ktk8CaCDDBPjLNyLo1FJxA&s?auto=format&fit=crop&w=500&q=100'
  },

  {
    name: 'Charging Port Repair',
    backText: 'We fix faulty charging ports, replace damaged connectors, and ensure smooth power flow for fast and stable charging performance.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBS7RLzX5HErY3qon_bs3xCBzaQS69a5sSA&s?auto=format&fit=crop&w=500&q=100'
  },

  {
    name: 'Speaker & Microphone Repair',
    backText: 'Audio issues such as low volume or mic failure are resolved through cleaning, and expert calibration.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg41gA5ZyXO4BfACFeMkpMlBgboefGyXQ0wA&s?auto=format&fit=crop&w=500&q=100'
  },

  {
    name: 'Other Services',
    backText: 'We handle software glitches, button malfunctions, heating problems, and many more mobile issues across all brands and models.',
    img: 'https://images.pexels.com/photos/6755091/pexels-photo-6755091.jpeg?auto=compress&cs=tinysrgb&w=500'
  }
];


}
