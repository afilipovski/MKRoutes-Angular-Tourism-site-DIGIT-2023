import { Component } from '@angular/core';
import { gradovi } from '../../assets/routes';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent {
  cities = gradovi;
  selectedCity = this.cities[0];

  click(city: any) {
    this.selectedCity = city;
  }
}
