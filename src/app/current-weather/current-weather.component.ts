import { Component } from '@angular/core';
import { ICurrentweather } from '../icurrent-weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {
  current: ICurrentweather
  constructor(private WeatherService: WeatherService) {
    this.current = {
      city: '',
      country: '',
      date: new Date(),
      image: '',
      temperature: 0,
      description: ''

    }
    this.WeatherService.getCurrentWeather('Bellevue', 'US').subscribe(data => this.current = data);
  }


}
