import { Component, Input } from '@angular/core';
import { IGrad } from '../grad';
import { gradovi } from '../../assets/routes';

@Component({
  selector: 'app-location-cards',
  templateUrl: './location-cards.component.html',
  styleUrls: ['./location-cards.component.css'],
})
export class LocationCardsComponent {
  @Input() locations: IGrad[] = [];
  @Input() selectedLocation: IGrad = gradovi[0];

  constructor() {}

  click(city: IGrad) {
    this.selectedLocation = city;
  }

  onScroll() {
    this.locations.push(...this.locations);
  }
}
