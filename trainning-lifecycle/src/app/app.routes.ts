import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Weather } from './components/weather/weather';
import { Watcher } from './components/watcher/watcher';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    children: [
      {
        path: '',
        component: Watcher,
      },
      {
        path: 'weather',
        component: Weather,
      },
    ],
  },
];
