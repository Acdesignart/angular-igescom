import { Routes } from '@angular/router';
import { BeasyDashboardComponent } from './beasy-dashboard/beasy-dashboard.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: BeasyDashboardComponent,
    children: [
      { path: '', redirectTo: 'beasy', pathMatch: 'full' },
      {
        path: 'beasy',
        component: BeasyDashboardComponent,
      },
    ],
  },
];
