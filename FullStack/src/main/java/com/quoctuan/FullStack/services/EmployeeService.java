package com.quoctuan.FullStack.services;

import com.quoctuan.FullStack.model.Employee;

import java.util.List;

public interface EmployeeService {
    Employee findByEmployee(long id);
    List<Employee> findAllEmployee();
    void saveEmployee(Employee e);
    void deleteEmployee(long id);
}
