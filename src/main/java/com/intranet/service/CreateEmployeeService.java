package com.intranet.service;

import java.util.List;
import java.util.Optional;

import com.intranet.dto.CreateEmployeeDTO;
import com.intranet.dto.EmployeeInfoDTO;
import com.intranet.entity.CreateEmployee;

public interface CreateEmployeeService {

	public CreateEmployee add(CreateEmployeeDTO createEmployeeDTO);

	public List<CreateEmployee> findAll();

	public CreateEmployee save(CreateEmployee createEmployee);

	public Optional<CreateEmployee> findById(String id);

	public void deleteById(String id);

	public CreateEmployee findByEmpCode(String empCode);

	public EmployeeInfoDTO employeeLogin(String empCode, String password);

}
