import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  signInVisible: boolean = false;

  scroll(id: string) {
    let el = document.getElementById(id);
    if (el != null) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
