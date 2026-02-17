import { Component } from '@angular/core';
import { NavMenu } from '../../components/nav-menu/nav-menu';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NavMenu, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
