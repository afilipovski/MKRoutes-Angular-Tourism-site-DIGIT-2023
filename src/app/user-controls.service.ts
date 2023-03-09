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
  
  async getLogs(uid:string | undefined | null) : Promise<any> {
    let defaultList : any = [];
    let logsRef = this.afd.database.ref(`${uid}/logs`);
    
    if (!uid) {
      return defaultList;
    }
    let data = (await logsRef.get()).exportVal();
    if (!data)
      return [];
    return Object.values(data);
  }

  setBookmarked(uid: string | null | undefined, placeName: string, value:boolean) {
    let ref = this.afd.database.ref(`${uid}/${placeName}/bookmarked`);
    ref.set(value);

    let logsRef = this.afd.database.ref(`${uid}/logs`)
    if (value) {
      logsRef.push({
        timestamp: Date.now(),
        place: placeName
      })
    } else {
      this.getLogs(uid).then(array => {
        console.log(array);
        
        array = array.filter((log: { place: string; }) => log.place !== placeName)
        logsRef.set(array);
      })
    }

  }
  async getStars(placeName: string) : Promise<any> {
    let ref = this.afd.database.ref(`ratings/${placeName}`);
    let data : number[] = Object.values((await ref.get()).exportVal());

    if (!data.length) {
      return null;
    }
    console.log(data);
    
    return {
      avg: data.reduce((a,b) => a + b, 0) / data.length,
      numReviews: data.length
    }
  }
  setStars(uid: string | null | undefined, placeName: string, value:number) {
    let ref = this.afd.database.ref(`${uid}/${placeName}/reviewStars`);
    ref.set(value);

    let cumulativeRatingRef = this.afd.database.ref(`ratings/${placeName}/${uid}`);
    cumulativeRatingRef.set(value);
  }
  setText(uid: string | null | undefined, placeName: string, value:string) {
    let ref = this.afd.database.ref(`${uid}/${placeName}/reviewText`);
    ref.set(value);
  }
}
