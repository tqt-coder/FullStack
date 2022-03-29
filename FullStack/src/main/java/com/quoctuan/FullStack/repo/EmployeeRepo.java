package com.quoctuan.FullStack.repo;

import com.quoctuan.FullStack.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepo extends JpaRepository<Employee , Long> {

}
