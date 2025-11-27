import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: true,
  templateUrl: './service-card.html',
  styleUrls: ['./service-card.scss']
})
export class ServiceCard {

  @Input() img!: string;
  @Input() name!: string;
  @Input() backText: string = "More details about this service.";
}
