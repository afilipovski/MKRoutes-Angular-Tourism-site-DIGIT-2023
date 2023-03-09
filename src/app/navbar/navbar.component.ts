import { Component, EventEmitter, Output, ViewChildren, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
    '(document:click)': 'onDocumentClick($event)',
  },
})
export class NavbarComponent {
  @Input() displayScroll : boolean = true;

  signInVisible: boolean = false;



  onDocumentClick(event : any) {
    this.signInVisible = false;  
  }
  onDivClick(event : any) {
    event.stopPropagation();
  }

  toggle(event : any) {
    this.signInVisible = !this.signInVisible;
    event.stopPropagation();
  }

  scroll(id: string) {
    let el = document.getElementById(id);
    if (el != null) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }


  @Input() onMainPage : boolean = false;
  searchEnabled : boolean = false;

  search() {
    if (this.onMainPage) {
      this.scroll('topDiv');
    }
    else {
      this.searchEnabled = !this.searchEnabled;
      console.log(this.searchEnabled);
      
    }
  }
}
