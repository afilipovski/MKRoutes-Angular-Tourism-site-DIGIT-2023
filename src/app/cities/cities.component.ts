import { Component } from '@angular/core';
import { gradovi } from '../../assets/routes';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent {
  cities = gradovi;

  click(name: string) {
    console.log(name);
  }
}
