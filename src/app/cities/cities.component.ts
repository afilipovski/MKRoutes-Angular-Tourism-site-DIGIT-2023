import { Component } from '@angular/core';
import { gradovi } from '../../assets/routes';
import { IGrad } from '../grad';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent {
  cities: IGrad[] = gradovi.slice().filter(grad => grad.type === 'city');
  selectedCity: IGrad = this.cities[0];

  click(city: IGrad) {
    this.selectedCity = city;
  }

  ngOnInit() {}
}
