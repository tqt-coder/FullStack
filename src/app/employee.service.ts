import { HttpClientModule } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "./employee";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})

export class EmployeeService {

    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.apiServerUrl}/rest/employees`);
    }

    public addEmployees(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(`${this.apiServerUrl}/rest/employees`, employee);
    }

    public updateEmployees(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.apiServerUrl}/rest/employees`, employee);
    }

    public deleteEmployees(employeeId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/rest/employees/${employeeId}`);
    }
}