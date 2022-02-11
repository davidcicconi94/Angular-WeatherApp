import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  weather!: any;
  city!: string;

  constructor(public weatherService: WeatherService) {}

  ngOnInit(): void {}

  getWeather(cityName: string) {
    this.weatherService.getWeather(cityName).subscribe({
      next: (res) => {
        this.weather = res;
        this.city = cityName;
        console.log(this.weather);
      },
      error: (err) => console.log(err),
    });
  }

  submitLocation(cityName: HTMLInputElement) {
    console.log(cityName.value);

    this.getWeather(cityName.value);

    cityName.value = '';

    cityName.focus();

    return false;
  }
}
