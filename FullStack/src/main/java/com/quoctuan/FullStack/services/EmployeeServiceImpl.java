package com.quoctuan.FullStack.services;

import com.quoctuan.FullStack.model.Employee;
import com.quoctuan.FullStack.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class EmployeeServiceImpl implements EmployeeService{
    @Autowired
    private EmployeeRepo employeeRepo;

    @Override
    public Employee findByEmployee(long id) {
        return employeeRepo.findById(id).get();
    }

    @Override
    public List<Employee> findAllEmployee() {
        return employeeRepo.findAll();
    }

    @Override
    public void saveEmployee(Employee e) {
        e.setEmployeeCode(UUID.randomUUID().toString());
        employeeRepo.save(e);
    }

    @Override
    public void deleteEmployee(long id) {
        Employee e = findByEmployee(id);
        employeeRepo.delete(e);
    }
}
