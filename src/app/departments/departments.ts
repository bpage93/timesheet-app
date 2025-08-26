import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsService } from '../services/departmentsServices';
import { DepartmentInterFace } from '../interfaces/departmentInterface';
import { MatCard } from '@angular/material/card';
import { MatList } from '@angular/material/list';
import { MatListItem } from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule, MatCard, MatList, MatListItem],
  templateUrl: './departments.html', // Corrected path
})
export class DepartmentsComponent implements OnInit {
  // Renamed to DepartmentsComponent
  departments: DepartmentInterFace[] | undefined;

  departmentsService = inject(DepartmentsService);

  goToDepartment(id: string): void {
    this.router.navigate(['/timesheet', { id }]);
  }
  router = inject(Router);

  ngOnInit(): void {
    this.departments = this.departmentsService.departments;
  }
}
