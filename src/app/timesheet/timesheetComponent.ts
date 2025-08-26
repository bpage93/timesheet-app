import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentInterFace } from '../interfaces/departmentInterface';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DepartmentsService } from '../services/departmentsServices';
import { MatCard } from '@angular/material/card';
import { MatFormField, MatFormFieldModule,} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { Emplyee } from '../interfaces/emplyee';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-timesheet',
  imports: [MatCard, MatFormField, MatIcon, ReactiveFormsModule, JsonPipe, MatFormFieldModule, MatInputModule],
  templateUrl: './timesheet.html',
  styleUrls: ['./timesheet.css'],
})
export class TimesheetComponent implements OnInit {
  departments!: DepartmentInterFace[];
  department: DepartmentInterFace | undefined;
  employeeNameFC = new FormControl('');
  employees: Emplyee[] = [];
  employeeId = 0;

  constructor(private route: ActivatedRoute, private departmentsService: DepartmentsService) {}

  ngOnInit(): void {
    this.departments = this.departmentsService.departments;
    this.department = this.departments.find(department => department.id === this.route.snapshot.params['id']);
  }

  addEmployee(): void {
    if (this.employeeNameFC.value) {
        this.employeeId++;

        this.employees.push({
            id: this.employeeId.toString(),
            departmentId: this.department?.id,
            name: this.employeeNameFC.value,
            payRate: Math.floor(Math.random() * 50) + 50,
        });

        this.employeeNameFC.setValue('');
    }
}
}
