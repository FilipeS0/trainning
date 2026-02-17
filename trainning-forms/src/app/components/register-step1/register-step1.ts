import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-step1',
  imports: [],
  templateUrl: './register-step1.html',
  styleUrl: './register-step1.css',
})
export class RegisterStep1 {
  @Output() next = new EventEmitter<void>();

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  ngOnInit() {
    console.log('started step 1');
  }

  submit() {
    if (this.form.valid) {
      this.next.emit();
    }
  }
}
