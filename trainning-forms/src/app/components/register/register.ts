import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  step = 1;

  goToStep2() {
    this.step = 2;
  }

  goToStep1() {
    this.step = 1;
  }
}
