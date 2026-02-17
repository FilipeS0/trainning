import { Routes } from '@angular/router';
import { UserForm } from './pages/user-form/user-form';
import { Register } from './pages/register/register';
import { PassForm } from './pages/pass-form/pass-form';

export const routes: Routes = [
  {
    path: '',
    component: Register,
    children: [
      {
        path: '',
        component: UserForm,
      },
      {
        path: 'pass',
        component: PassForm,
      },
    ],
  },
];
