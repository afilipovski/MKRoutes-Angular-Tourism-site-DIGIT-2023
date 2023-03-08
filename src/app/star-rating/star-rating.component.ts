import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() stars : number | number[] = 5;
  starsArr : number[] = [0,1,2,3,4];

  rating : number = 0;
  tempRating : number = 0;

  hoverEvent(tempRating : number) : void {
    this.tempRating = tempRating;    
  }
  clickEvent() : void {
    this.rating = this.tempRating
  }
  ngOnInit() {
    let indices : number[] = [];
    for (let i=0; i<this.stars; i++)
      indices.push(i);
    this.starsArr = indices;
  }
  getIconType(index : number, rating : number) : string {
    if (index < rating) {
      return "star"
    }
    return "star_outline"
  }
}
