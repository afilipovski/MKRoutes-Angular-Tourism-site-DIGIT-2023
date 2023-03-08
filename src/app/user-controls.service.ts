import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserControlsService {
  constructor(
    private afd : AngularFireDatabase
  ) {}

  async getPlaceDetails(uid:string | undefined | null, placeName : string) {
    let defaultObject = {
      bookmarked: false,
      reviewStars: 0,
      reviewText: ""
    }
    if (!uid) {
      return defaultObject;
    }
    let ref = this.afd.database.ref(`${uid}/${placeName}`);
    let data = await ref.get();
    if (data.exists()) {
      return data.exportVal()
    }
    return defaultObject;
  }

  setBookmarked(uid: string | null | undefined, placeName: string, value:boolean) {
    let ref = this.afd.database.ref(`${uid}/${placeName}/bookmarked`);
    ref.set(value);
  }
  setStars(uid: string | null | undefined, placeName: string, value:number) {
    let ref = this.afd.database.ref(`${uid}/${placeName}/reviewStars`);
    ref.set(value);
  }
  setText(uid: string | null | undefined, placeName: string, value:string) {
    let ref = this.afd.database.ref(`${uid}/${placeName}/reviewText`);
    ref.set(value);
  }
}
