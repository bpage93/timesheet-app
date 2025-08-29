import { Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments';
import { TimesheetComponent } from './timesheet/timesheetComponent';
import { AnalyticsComponent } from './analytics/analytics';
import { AboutMeComponent } from './about-mecomponent/about-mecomponent';
import { ContactComponent } from './contact/contact';

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
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'about-mecomponent', component: AboutMeComponent },
  { path: 'contact-page', component: ContactComponent }
];
