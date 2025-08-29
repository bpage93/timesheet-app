import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentInterFace } from '../interfaces/departmentInterface';
import { FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DepartmentsService } from '../services/departmentsServices';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Emplyee } from '../interfaces/emplyee';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-timesheet',
  standalone: true,
  // Note: Added ReactiveFormsModule to imports for clarity
  imports: [
    MatCard,
    MatFormField,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardContent,
    MatIcon,
    MatButtonModule,
    JsonPipe,
  ],
  templateUrl: './timesheet.html',
  styleUrls: ['./timesheet.css'],
})
export class TimesheetComponent implements OnInit {
  departments!: DepartmentInterFace[];
  department: DepartmentInterFace | undefined;
  employeeNameFC = new FormControl('', this.nameValidator());
  employees: Emplyee[] = [];
  employeeId = 0;

  constructor(private route: ActivatedRoute, private departmentsService: DepartmentsService) {}

  ngOnInit(): void {
    this.departments = this.departmentsService.departments;
    // This line correctly reads the ':id' parameter from the URL
    const id = this.route.snapshot.params['id'];
    this.department = this.departments.find((department) => department.id === id);
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

  nameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let error = null;
      if (this.employees && this.employees.length) {
        this.employees.forEach((employee) => {
          if (employee.name.toLowerCase() === control.value.toLowerCase()) {
            error = { duplicate: true };
          }
        });
      }
      return error;
    };
  }
}
