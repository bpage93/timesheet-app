import { Injectable } from '@angular/core';
import { DepartmentInterFace } from '../interfaces/departmentInterface';


@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  departments: DepartmentInterFace[] = [
    { id: '1', name: 'Customer Success' },
    { id: '2', name: 'Sales' },
    { id: '3', name: 'Finance' },
  ];
}
