package com.quoctuan.FullStack.controller;

import com.quoctuan.FullStack.model.Employee;
import com.quoctuan.FullStack.services.EmployeeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/rest")
public class EmployeeController {
    @Autowired
    private EmployeeServiceImpl employeeServiceImpl;

    @GetMapping("/employees")
    public ResponseEntity<List<Employee>>getAllEmployees(){
        List<Employee> listEmployee = employeeServiceImpl.findAllEmployee();

        return ResponseEntity.ok(listEmployee);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee>getEmployeeId (@PathVariable("id") long id){
       Employee e = new Employee();

       e = employeeServiceImpl.findByEmployee(id);

        return ResponseEntity.ok(e);
    }

    @PostMapping("/employees")
    public ResponseEntity<Employee> setEmployee (@RequestBody Employee employee){
        employeeServiceImpl.saveEmployee(employee);

        Employee e = employeeServiceImpl.findByEmployee(employee.getId());
        return new ResponseEntity<>(e, HttpStatus.CREATED);
    }

    @PutMapping("/employees")
    public ResponseEntity<Employee> setEmployeeUpdate (@RequestBody Employee employee){
        employeeServiceImpl.saveEmployee(employee);

        Employee e = employeeServiceImpl.findByEmployee(employee.getId());
        return new ResponseEntity<>(e, HttpStatus.OK);
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") long id){
        employeeServiceImpl.deleteEmployee(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }


}
