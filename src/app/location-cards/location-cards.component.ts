import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGrad } from '../grad';
import { gradovi } from '../../assets/routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-cards',
  templateUrl: './location-cards.component.html',
  styleUrls: ['./location-cards.component.css'],
})
export class LocationCardsComponent {
  @Input() locations: IGrad[] = [];
  @Input() selectedLocation: IGrad = gradovi[0];
  @Output() selectedLocationChange = new EventEmitter<IGrad>();
  @Input() filter: string = 'none';

  constructor(private router : Router) {}

  click(city: IGrad) {
    if (this.filter !== 'city') {
      this.router.navigate([`/place/${city.name.toLowerCase()}`])
    }
    this.selectedLocation = city;
    this.selectedLocationChange.emit(this.selectedLocation);
  }

  onScroll() {
    this.locations.push(...this.locations);
  }
}
