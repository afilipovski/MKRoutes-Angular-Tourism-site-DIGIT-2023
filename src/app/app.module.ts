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
import { CityInfoComponent } from './city-info/city-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HighlightDirective,
    HomeComponent,
    WeatherComponent,
    CitiesComponent,
    CityInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
