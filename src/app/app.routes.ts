import { Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments';
import { TimesheetComponent } from './timesheet/timesheet.component';

export const routes: Routes = [
  {
    path: 'departments',
    component: DepartmentsComponent,
  },
  {
    // This path uses ':id' as a placeholder for the department ID.
    // It matches the link you created in departments.html.
    path: 'departments/timesheet/:id',
    component: TimesheetComponent,
  },
  // It's good practice to have a default route.
  { path: '', redirectTo: 'departments', pathMatch: 'full' },
];
