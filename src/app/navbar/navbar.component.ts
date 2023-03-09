import { Component, EventEmitter, Output, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
    '(document:click)': 'onDocumentClick($event)',
  },
})
export class NavbarComponent {
  @ViewChildren('signIn') signInComponent : any;

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
}
