import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { gradovi } from 'src/assets/routes';
import { IGrad } from '../grad';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private auth : AngularFireAuth,
    private db : AngularFireDatabase
  ) {}

  ngOnInit():void {
    const placeName = this.route.snapshot.paramMap.get("id");
    
    this.placeDetails = gradovi.filter(grad => grad.name.toLowerCase() === placeName)[0]
    
    if (!this.placeDetails) {
      this.location.back();
    }

    this.auth.user.subscribe(user => {
      let ref = this.db.database.ref(user!.uid);
      ref.get().then(snapshot => {
        this.userControls = snapshot;
      })
    })
  }

  placeDetails?:IGrad;
  userControls : any = {
    bookmark: false,
    reviewStars: 0,
    reviewText: ""
  }
}
