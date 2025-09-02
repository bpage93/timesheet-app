import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { MatTabsModule } from '@angular/material/tabs';  // Import MatTabsModule
import { AnalyticsTableComponent } from '../analytics-table/analytics-table';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [RouterModule, MatCardModule, MatTabsModule, AnalyticsTableComponent],
  templateUrl: './analytics.html',
  styleUrls: ['./analytics.css'],
})
export class AnalyticsComponent {
  // private router = inject(Router);
}
