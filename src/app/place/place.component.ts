import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { gradovi } from 'src/assets/routes';
import { IGrad } from '../grad';
import { UserControlsService } from '../user-controls.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
})
export class PlaceComponent {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private ucs: UserControlsService,
    private afa: AngularFireAuth,
    private dialog: MatDialog
  ) {
    this.cities = gradovi;
  }

  cities: IGrad[];

  placeName: string = '';
  placeDetails?: IGrad;

  sights : IGrad[] = [];
  accommodation : IGrad[] = [];

  bookmarked: boolean = false;

  uid?: string | null | undefined;

  toggleBookmark() {
    if (this.uid) {
      this.bookmarked = !this.bookmarked;
      this.ucs.setBookmarked(this.uid, this.placeName, this.bookmarked);
    } else {
      this.dialog.open(ErrorDialogComponent, {
        width: '400px',
        data: {
          title: 'Log in required',
          body: 'You must be logged in to bookmark places.',
        },
      });
    }
  }
  ngOnInit(): void {
    this.afa.onAuthStateChanged((user) => {
      this.uid = user?.uid;
      this.ucs.getPlaceDetails(this.uid, this.placeName).then((res) => {
        this.bookmarked = res.bookmarked;
      });
    });

    this.route.params.subscribe(() => {
      this.placeName = this.route.snapshot.paramMap.get('id') || '';

      this.placeDetails = gradovi.filter(
        (grad) => grad.name.toLowerCase() === this.placeName
      )[0];

      if (!this.placeName || !this.placeDetails) {
        this.location.back();
        return;
      }

      if (this.placeDetails.sights) {
        this.sights = gradovi.filter((s) =>
          s.type === 'sight' &&
          this.placeDetails?.sights?.includes(s.name)
        );
      }
      else {
        this.sights = [];
      }
      if (this.placeDetails.accommodation) {
        this.accommodation = gradovi.filter((a) =>
          a.type === 'accommodation' &&
          this.placeDetails?.accommodation?.includes(a.name)
        );
      } else {
        this.accommodation = []
      }
    });
  }
}
