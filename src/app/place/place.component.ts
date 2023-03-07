import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { gradovi } from 'src/assets/routes';
import { IGrad } from '../grad';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent {
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit():void {
    const placeName = this.route.snapshot.paramMap.get("id");
    
    this.details = gradovi.filter(grad => grad.name.toLowerCase() === placeName)[0]
    
    if (!this.details) {
      this.location.back();
    }
  }

  details?:IGrad;
}
