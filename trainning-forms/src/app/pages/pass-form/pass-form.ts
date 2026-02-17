import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-pass-form',
  imports: [ReactiveFormsModule],
  templateUrl: './pass-form.html',
  styleUrl: './pass-form.css',
})
export class PassForm {
  @Output() back = new EventEmitter<void>();

  confimartionOfPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const pass = control.get('pass')?.value;
    const rPass = control.get('rPass')?.value;

    if (pass && rPass && pass !== rPass) {
      control.get('rPass')?.setErrors({ mismatch: true });
      return { mismatch: true };
    } else {
      control.get('rPass')?.setErrors(null);
      return null;
    }
  };

  firstForm = new FormGroup(
    {
      pass: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
      rPass: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
    },
    {
      validators: [this.confimartionOfPassword],
    },
  );
}
