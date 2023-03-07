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
    this.getPlace();
  }

  details?:IGrad;

  getPlace(): void {
    const placeName = this.route.snapshot.paramMap.get("id");
    console.log(placeName);
    
    this.details = gradovi.filter(grad => grad.name.toLowerCase() === placeName)[0]
    console.log(this.details);
    
  }
}
