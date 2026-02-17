import { Component } from '@angular/core';
import { UserForm } from '../user-form/user-form';
import { PassForm } from '../pass-form/pass-form';

@Component({
  selector: 'app-register',
  imports: [UserForm, PassForm],
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
