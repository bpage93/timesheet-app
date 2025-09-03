import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DepartmentInterFace } from '../interfaces/departmentInterface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  private apiUrl = 'https://api.example.com/departments';

  constructor(private http: HttpClient) {}

getDepartments(): Observable<DepartmentInterFace[]> {
    return this.http.get<DepartmentInterFace[]>(`https://hr-timesheet-test.firebaseio.com/departments.json`);
}
  departments: DepartmentInterFace[] = [
    { id: '1', name: 'Customer Success' },
    { id: '2', name: 'Sales' },
    { id: '3', name: 'Finance' },
  ];
id: any;
}
