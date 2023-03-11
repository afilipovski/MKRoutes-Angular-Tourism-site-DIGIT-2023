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

  // BUBBLING

  onDocumentClick(event : any) {
    this.signInVisible = false;  
    this.searchEnabled = false;
  }
  // Sign in div click disables the search
  onSignInClick(event : any) {
    this.searchEnabled = false;
    event.stopPropagation();
  }
  // Search div click disables sign in
  onSearchClick(event : any) {
    this.signInVisible = false;
    event.stopPropagation();
  }
  // Click on sign in button toggles it
  signInButtonClick(event : any) {
    this.signInVisible = !this.signInVisible;
    this.searchEnabled = false;
    event.stopPropagation();
  }
  // Click on search button toggles it

  scroll(id: string) {
    let el = document.getElementById(id);
    if (el != null) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }


  @Input() onMainPage : boolean = false;
  searchEnabled : boolean = false;

  search(event : any) {
    this.signInVisible = false;
    if (this.onMainPage) {
      this.scroll('topDiv');
    }
    else {
      this.searchEnabled = !this.searchEnabled;
    }
    event.stopPropagation();
  }
}
