import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  URL: string = '';
  apiKey: string = '828b83bad5150077b8d062536f315be5';
  cityNamee: string = '';
  countryName: string = '';

  constructor(public _httpclient: HttpClient) {
    this.URL = `http://api.openweathermap.org/data/2.5/weather?q=`;
  }

  getWeather(cityName: string) {
    return this._httpclient.get(`${this.URL}${cityName}&appid=${this.apiKey}`);
  }
}
