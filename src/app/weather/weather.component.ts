import { Component, Input } from '@angular/core';
import { IWeather } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weather?:IWeather;

  @Input() lat : number = 0;
  @Input() lon : number = 0;

  constructor(private weatherService : WeatherService) {}
  ngOnInit() {
    console.log("RABOTI?");
    
    this.weatherService.getWeather(this.lat, this.lon).subscribe(
      r => {
        console.log(r);
        console.log(r["weather"][0]["icon"]);
        
        this.weather = {
          img: `https://afilipovski.github.io/meteo-vitals/images/weather/${r["weather"][0]["icon"]}@2x.png`,
          desc: r["weather"][0]["description"],
          temp: r["main"]["temp"],
          feelsLike: r["main"]["feels_like"]
        }
      }
    )
  }
}
