import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { PlaceComponent } from './place/place.component';
import { SignupComponent } from './signup/signup.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'search', component: SearchComponent },
  { path: 'place/:id', component: PlaceComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'bookmarks', component: BookmarksComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
