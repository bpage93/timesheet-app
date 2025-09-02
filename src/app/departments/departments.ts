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
  departments: DepartmentInterFace[] = [];

  private departmentsService = inject(DepartmentsService);
  private router = inject(Router);

  ngOnInit(): void {
    this.departmentsService.getDepartments().subscribe((departments: DepartmentInterFace[]) => {
      this.departments = departments;
    });
  }


}
