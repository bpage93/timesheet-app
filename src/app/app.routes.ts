// src/app/app.routes.ts
import { Routes } from '@angular/router';

// Import your components (adjust paths to match your folders)
import { DepartmentsComponent } from '../app/departments/departments';
import { TimesheetComponent } from './timesheet/timesheetComponent';
import { Analytics } from '../app/analytics/analytics';

export const routes: Routes = [
  { path: '', redirectTo: 'departments', pathMatch: 'full' },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'timesheet', component: TimesheetComponent },
  { path: 'analytics', component: Analytics },
];
