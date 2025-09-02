import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DepartmentInterFace } from '../interfaces/departmentInterface';
import { FormControl, ValidatorFn, AbstractControl, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DepartmentsService } from '../services/departmentsServices';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Employee } from '../interfaces/employee';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-timesheet',
  standalone: true,
  // Note: Added ReactiveFormsModule to imports for clarity
  imports: [
    MatCard,
    MatFormField,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardContent,
    MatIcon,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './timesheet.html',
  styleUrls: ['./timesheet.css'],
})
export class TimesheetComponent implements OnInit {
  departments!: DepartmentInterFace[];
  department: DepartmentInterFace | undefined;
  employeeNameFC = new FormControl('', this.nameValidator());
  employees: Employee[] = [];
  employeeId = 0;
  weekdays: string[] = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

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
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
        saturday: 0,
        sunday: 0,
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
  getTotalHours(employee: Employee): number {
    return (
      employee.monday +
      employee.tuesday +
      employee.wednesday +
      employee.thursday +
      employee.friday +
      employee.saturday +
      employee.sunday
    );
  }

  deleteEmployee(index: number): void {
    this.employees.splice(index, 1);
  }
}
