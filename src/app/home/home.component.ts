import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { gradovi } from 'src/assets/routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  gradovi2 = gradovi.filter((grad) => grad.type === 'city');
  constructor(private router: Router) {}

  randomLocation() {
    this.router.navigate([
      `/place/${this.gradovi2
        .at(Math.floor(Math.random() * this.gradovi2.length))
        ?.name.toLowerCase()}`,
    ]);
  }
}
