import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { IGrad } from '../grad';
import { UserControlsService } from '../user-controls.service';
import { gradovi } from 'src/assets/routes';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent {
  constructor(
    private afa: AngularFireAuth,
    private ucs: UserControlsService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  bookmarkedPlaces : IGrad[] = [];

  async setBookmarkedPlaces(uid : string) {
    let logs : {place : string, timestamp : number}[]= await this.ucs.getLogs(uid);
    
    this.bookmarkedPlaces = logs.sort((a,b) => b.timestamp - a.timestamp).map(log => {
      return gradovi.filter(grad => grad.name.toLowerCase() === log.place)[0]
    })
    
  }

  ngOnInit() {
    this.afa.onAuthStateChanged(user => {
      let uid = user?.uid;
      if (!uid) {
        this.location.back();
        return
      }
      this.setBookmarkedPlaces(uid);
    })
  }
}
