import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../interfaces/employee'; // Import the interface

@Component({
  selector: 'app-analytics-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics-table.html',
  styleUrls: ['./analytics-table.css'],
})
export class AnalyticsTableComponent {
  @Input()
  departmentId: string | undefined;

  weekdays: string[] = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];
  employees: Employee[] = [];
  employeeData: Employee[] = [
    {
      departmentId: '1',
      friday: 6,
      id: '1',
      monday: 4,
      name: 'a',
      payRate: 70,
      saturday: 7,
      sunday: 6,
      thursday: 5,
      tuesday: 3,
      wednesday: 4,
    },
    {
      departmentId: '1',
      friday: 2,
      id: '2',
      monday: 4,
      name: 'b',
      payRate: 63,
      saturday: 1,
      sunday: 2,
      thursday: 3,
      tuesday: 3,
      wednesday: 4,
    },
    {
      departmentId: '2',
      friday: 9,
      id: '3',
      monday: 8,
      name: 'c',
      payRate: 76,
      saturday: 7,
      sunday: 5,
      thursday: 4,
      tuesday: 7,
      wednesday: 5,
    },
    {
      departmentId: '3',
      friday: 2,
      id: '4',
      monday: 3,
      name: 'd',
      payRate: 56,
      saturday: 3,
      sunday: 2,
      thursday: 0,
      tuesday: 4,
      wednesday: 5,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.employees = this.employeeData.filter(
      (employee) => employee.departmentId === this.departmentId
    );
  }
}
