import { EmployeeService } from './employee.service';
import { Employee } from './employee';
import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'employeemanagerapp';

  public employees: Employee[];
  public editEmployee: Employee;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (respone: Employee[]) => {
        this.employees = respone;
        this.editEmployee = this.employees[0];
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(employee: Employee, modal: string): void {
    const button = document.createElement('button');
    const container = document.getElementById('main-container');

    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (modal === 'add') {
      button.setAttribute('data-target', '#addEmployee');
    }
    if (modal === 'edit') {
      this.editEmployee = employee;

      button.setAttribute('data-target', '#editEmployee');
    }
    if (modal === 'delete') {
      this.editEmployee = employee;
      console.log(this.editEmployee);
      button.setAttribute('data-target', '#deleteEmployee');
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddEmployee(addForm: NgForm): void {
    // document.getElementById("add-employee-form").click();
    this.employeeService.addEmployees(addForm.value).subscribe(
      (respone: Employee) => {
        console.log(respone);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error);
      }
    );
  }

  public onUpdateEmployee(employee: Employee): void {
    const hiddenEdit = document.getElementById('hidden-edit');
    // document.getElementById("add-employee-form").click();
    this.employeeService.updateEmployees(employee).subscribe(
      (respone: Employee) => {
        console.log(respone);
        this.getEmployees();
        hiddenEdit.click();
      },
      (error: HttpErrorResponse) => {
        alert(error);
      }
    );
  }

  public onDeleteEmployee(employee: Employee): void {
    const hiddenBtn = document.getElementById('btn-close-delete');
    this.employeeService.deleteEmployees(employee.id).subscribe(
      (response) => {
        this.getEmployees();
        alert('Delete sucessfully employee id' + employee.id);
        hiddenBtn.click();
      },
      (error: HttpErrorResponse) => {
        alert(error);
      }
    );
  }
}
