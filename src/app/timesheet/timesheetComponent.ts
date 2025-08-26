import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentInterFace } from '../interfaces/departmentInterface';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DepartmentsService } from '../services/departmentsServices';
import { MatCard } from '@angular/material/card';
import { MatFormField} from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';


@Component({
  selector: 'app-timesheet',
  imports: [MatCard, MatFormField, ReactiveFormsModule],
  templateUrl: './timesheet.html',
  styleUrls: ['./timesheet.css'],
})
export class TimesheetComponent implements OnInit {
  departments!: DepartmentInterFace[];
  department!: DepartmentInterFace;
  employeeNameFC = new FormControl('');

  constructor(private route: ActivatedRoute, private departmentsService: DepartmentsService) {}

  ngOnInit(): void {
    // Initialization logic here
  }
}
