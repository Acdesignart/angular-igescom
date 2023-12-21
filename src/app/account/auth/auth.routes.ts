import { Routes } from '@angular/router';
import { AccountComponent } from '../account.component';
import { LoginStandardUserComponent } from './login-standard-user/login-standard-user.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: '', redirectTo: 'login-standard-user', pathMatch: 'full' },
      {
        path: 'login-standard-user',
        component: LoginStandardUserComponent,
      },
      {
        path: 'login-admin',
        component: LoginAdminComponent,
      },
    ],
  },
];
