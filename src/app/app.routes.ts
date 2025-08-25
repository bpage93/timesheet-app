// src/app/app.routes.ts
import { Routes } from '@angular/router';

// Import your components (adjust paths to match your folders)
import { DepartmentsComponent } from '../app/departments/departments';
import { Timesheet} from '../app/timesheet/timesheet';
import { Analytics } from '../app/analytics/analytics';

export const routes: Routes = [
  { path: '', redirectTo: 'departments', pathMatch: 'full' },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'timesheet', component: Timesheet },
  { path: 'analytics', component: Analytics },
];

