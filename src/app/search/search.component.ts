import { Component } from '@angular/core';
import { gradovi } from '../../assets/routes';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  routes = gradovi;
  searchQuery: string = '';

  change(event: string) {
    this.routes = gradovi.filter((grad) =>
      grad.name.toLowerCase().includes(this.searchQuery)
    );
  }
}
