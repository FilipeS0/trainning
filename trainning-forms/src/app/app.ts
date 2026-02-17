import { Component, signal } from '@angular/core';
import { UserForm } from './pages/user-form/user-form';

@Component({
  selector: 'app-root',
  imports: [UserForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
