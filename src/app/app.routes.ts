import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./account/auth/auth.routes').then(m => m.authRoutes),
  },

  // Redirect empty path to '/dashboards/project'
  { path: '', pathMatch: 'full', redirectTo: 'admin' },
  {
    path: '',
    component: MainLayoutComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: 'admin',
        loadComponent: () =>
          import('./admin-test/admin-test.component').then(
            c => c.AdminTestComponent
          ),
      },
      {
        path: 'dash',
        loadComponent: () =>
          import(
            './admin/dashboards/beasy-dashboard/beasy-dashboard.component'
          ).then(c => c.BeasyDashboardComponent),
      },
      {
        path: 'caisse',
        loadComponent: () =>
          import('./caisse/caisse.component').then(c => c.CaisseComponent),
      },
    ],
  },
];
