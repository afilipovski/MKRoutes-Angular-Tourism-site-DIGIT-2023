import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() stars : number | number[] = 5;
  @Output() review = new EventEmitter<{reviewStars : number, reviewText : string}>
  starsArr : number[] = [0,1,2,3,4];

  rating : number = 0;
  text : string = "";
  editable : boolean = false;
  tempRating : number = 0;

  hoverEvent(tempRating : number) : void {
    if (this.editable) {
      this.tempRating = tempRating;    
    }
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
  toggleEditable() {
    this.editable = !this.editable;
    if (!this.editable) {
      this.review.emit({
        reviewStars: this.rating,
        reviewText: this.text
      })
    }
  }

}
