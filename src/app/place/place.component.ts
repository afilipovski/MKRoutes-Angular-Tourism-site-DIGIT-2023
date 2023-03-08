import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { gradovi } from 'src/assets/routes';
import { IGrad } from '../grad';
import { UserControlsService } from '../user-controls.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private ucs : UserControlsService,
    private afa : AngularFireAuth
  ) {}

  placeName : string = "";
  placeDetails?:IGrad;

  sights ?: IGrad[];
  accommodation ?: IGrad[];

  userControls : any = {
    bookmarked: false,
    reviewStars: 0,
    reviewText: ""
  }

  uid ?: string | null | undefined;

  toggleBookmark() {
    this.userControls.bookmarked = !this.userControls.bookmarked;
    this.ucs.setDetails(this.uid, this.placeName, this.userControls);
  }
  ngOnInit():void {
    this.placeName = this.route.snapshot.paramMap.get("id") || "";
    
    this.placeDetails = gradovi.filter(grad => grad.name.toLowerCase() === this.placeName)[0]
    
    if (!this.placeName || !this.placeDetails) {
      this.location.back();
      return;
    }

    if (this.placeDetails.sights) {
      this.sights = gradovi.filter(s => this.placeDetails?.sights?.includes(s.name));
    }
    if (this.placeDetails.accommodation) {
      this.accommodation = gradovi.filter(h => this.placeDetails?.accommodation?.includes(h.name))
    }
    
    this.afa.onAuthStateChanged(user => {
      this.uid = user?.uid;
      this.ucs.getPlaceDetails(this.uid, this.placeName).then(res => {
        this.userControls = res;
        console.log(res); 
      })
    })
  }

}
