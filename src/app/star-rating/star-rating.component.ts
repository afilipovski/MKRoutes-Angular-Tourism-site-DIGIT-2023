import { Component, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserControlsService } from '../user-controls.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() placeName !: string;

  editable : boolean = false;

  starsArr : number[] = [0,1,2,3,4];

  rating : number = 0;
  text : string = "";

  tempRating : number = 0;

  hoverEvent(tempRating : number) : void {
    if (this.editable) {
      this.tempRating = tempRating;    
    }
  }
  clickEvent() : void {
    this.rating = this.tempRating
  }

  toggleEditable() {
    if (!this.uid) {
      this.dialog.open(ErrorDialogComponent, {
        width:'400px',
        data: {
          title: "Log in required",
          body: "You must be logged in to review places."
        }
      })
      return;
    }
    this.editable = !this.editable;

    let promises : Promise<any>[] = [];

    if (!this.editable) {
      promises.push(this.ucs.setStars(this.uid, this.placeName, this.rating));
      promises.push(this.ucs.setText(this.uid, this.placeName, this.text));
    }
    Promise.all(promises).then(() => this.getAvgRating());
  }

  constructor(
    private afa : AngularFireAuth,
    private ucs : UserControlsService,
    private dialog : MatDialog
  ) {}
  uid ?: string;
  ngOnInit() {
    this.afa.onAuthStateChanged(user => {
      this.uid = user?.uid;
      this.ucs.getPlaceDetails(this.uid, this.placeName).then(review => {
        
        this.rating = this.tempRating = review.reviewStars;
        this.text = review.reviewText;
        
      })
    })
    this.getAvgRating();
  }

  avgRating ?: {avg : number, numReviews : number};

  getAvgRating() {
    this.ucs.getStars(this.placeName).then(ar => {
      ar.avg = Math.round(ar.avg*100) / 100
      this.avgRating = ar;
    })
  }

  ngOnChanges() {
    this.getAvgRating();
    this.ucs.getPlaceDetails(this.uid, this.placeName).then(review => {
        
      this.rating = this.tempRating = review.reviewStars;
      this.text = review.reviewText;
      
    })
  }
}
