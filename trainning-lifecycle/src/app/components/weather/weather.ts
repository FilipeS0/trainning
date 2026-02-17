import { Component, signal } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather {
  weatherForecast = signal(0);
  sub!: Subscription;

  ngOnInit() {
    console.log('subscription started');
    this.sub = interval(1000).subscribe((value) => {
      console.log(value);
      this.weatherForecast.set(value);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    console.log('sub destroyed');
  }
}
