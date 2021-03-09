package com.intranet.service;

import java.util.List;
import java.util.Optional;

import com.intranet.dto.EmployeeInfoDTO;
import com.intranet.entity.EmployeeInfo;

public interface EmployeeInfoService {
	
	EmployeeInfoDTO add(EmployeeInfoDTO employeeInfo);

	public List<EmployeeInfo> findAll();

	public EmployeeInfo save(EmployeeInfo employeeInfo);

	public Optional<EmployeeInfo> findById(String id);

	public void deleteById(String id);

}
