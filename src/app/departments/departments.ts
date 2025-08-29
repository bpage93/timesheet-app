import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsService } from '../services/departmentsServices';
import { DepartmentInterFace } from '../interfaces/departmentInterface';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, RouterModule],
  templateUrl: './departments.html',
})
export class DepartmentsComponent implements OnInit {
  departments: DepartmentInterFace[] | undefined;

  private departmentsService = inject(DepartmentsService);
  private router = inject(Router);

  ngOnInit(): void {
    this.departments = this.departmentsService.departments;
  }

  // This method is not used by [routerLink].
  // To use it, your HTML would need: (click)="goToDepartment(department.id)"
  // goToDepartment(id: string): void {
  //   // Note: The correct way to pass a route parameter is without the object literal.
  //   this.router.navigate(['/timesheet', id]);
  // }
}
