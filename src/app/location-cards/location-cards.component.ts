import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGrad } from '../grad';
import { gradovi } from '../../assets/routes';
import { Router } from '@angular/router';
import { UserControlsService } from '../user-controls.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

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

  @Input() navigateOnClick !: boolean;

  constructor(
    private router : Router,
    private ucs : UserControlsService,
    private afa : AngularFireAuth
  ) {}

  click(city: IGrad) {
    this.selectedLocation = city;
    this.selectedLocationChange.emit(this.selectedLocation);
  }

  onScroll() {
    this.locations.push(...this.locations);
  }
}
