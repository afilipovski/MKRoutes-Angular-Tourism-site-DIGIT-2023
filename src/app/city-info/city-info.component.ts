import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css'],
})
export class CityInfoComponent {
  @Input() selectedCity: any;
}
