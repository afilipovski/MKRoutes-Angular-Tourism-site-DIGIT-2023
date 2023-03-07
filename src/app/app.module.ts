import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { HomeComponent } from './home/home.component';

// HTTP POVICI
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import { CitiesComponent } from './cities/cities.component';
import { PlaceComponent } from './place/place.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MATERIAL UI

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { CityInfoComponent } from './city-info/city-info.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HighlightDirective,
    HomeComponent,
    WeatherComponent,
    CitiesComponent,
    PlaceComponent,
    StarRatingComponent,
    CityInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
