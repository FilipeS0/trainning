import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  imports: [],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  @Output() next = new EventEmitter<void>();
}
