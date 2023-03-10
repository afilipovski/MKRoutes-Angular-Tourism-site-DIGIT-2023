import { Component, Input } from '@angular/core';
import { IGrad } from '../grad';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserControlsService } from '../user-controls.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent {
  @Input() place !: IGrad;
  @Input() navigateOnClick !: boolean;

  constructor(
    private afa : AngularFireAuth,
    private ucs : UserControlsService,
    private router : Router,
    private dialog : MatDialog
  ) {}

  uid ?: string;
  bookmarked ?: boolean;

  async getBookmarked() {
    this.ucs.getPlaceDetails(this.uid, this.place.name.toLowerCase()).then(details => {
      this.bookmarked = details.bookmarked;
    })
  }

  toggleBookmark(event : any) {
    event.stopPropagation();
    if (this.uid) {
      this.bookmarked = !this.bookmarked;
      this.ucs.setBookmarked(this.uid, this.place.name.toLowerCase(), this.bookmarked);
    }
    else {
      this.dialog.open(ErrorDialogComponent, {
        width: '400px',
        data: {
          title: 'Log in required',
          body: 'You must be logged in to bookmark places.',
        },
      });
    }
  }

  click() {
    
    if (this.navigateOnClick) {
      
      this.router.navigate([`/place/${this.place.name.toLowerCase()}`])
    }
  }

  ngOnInit() {
    this.afa.onAuthStateChanged(user => {
      this.uid = user?.uid;
      if (this.uid) {
        this.getBookmarked();
      }
    })
  }
}
