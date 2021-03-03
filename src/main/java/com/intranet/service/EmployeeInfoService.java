package com.intranet.service;

import java.util.List;
import java.util.Optional;

import com.intranet.entity.EmployeeInfo;

public interface EmployeeInfoService {
	
	EmployeeInfo add(EmployeeInfo employeeInfo);

	public List<EmployeeInfo> findAll();

	public EmployeeInfo save(EmployeeInfo employeeInfo);

	public Optional<EmployeeInfo> findById(String id);

	public void deleteById(String id);

}
