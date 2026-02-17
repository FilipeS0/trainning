import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-watcher',
  imports: [],
  templateUrl: './watcher.html',
  styleUrl: './watcher.css',
})
export class Watcher {
  counter = signal(0);
  intervalId!: any;

  ngOnInit() {
    console.log('component created');

    this.intervalId = setInterval(() => {
      this.counter.update((counter) => counter + 1);
      console.log(this.counter());
    }, 1000);
  }

  ngOnDestroy() {
    console.log('component destroyed');
    clearInterval(this.intervalId);
  }
}
