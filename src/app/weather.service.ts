import { Injectable } from '@angular/core';
import { IWeather } from './weather'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  constructor(
    private http: HttpClient,
  ) { }
 
  getWeather(longitude:number, latitude:number) : Observable<any> {
    return this.http.get<IWeather>(`https://api.openweathermap.org/data/2.5/weather?lat=${longitude}&lon=${latitude}&units=metric&appid=ff231ff4f3c86c49a4b944e7af75ed8e`);
  }
}
