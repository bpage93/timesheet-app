import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-timesheet',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './timesheet.component.html',
})
export class TimesheetComponent {
  private route = inject(ActivatedRoute);

  // This creates an observable that reads the 'id' parameter from the URL.
  // The `$` at the end is a convention to indicate that it's an Observable.
  departmentId$: Observable<string | null>;

  constructor() {
    this.departmentId$ = this.route.paramMap.pipe(map((params) => params.get('id')));
  }
}
