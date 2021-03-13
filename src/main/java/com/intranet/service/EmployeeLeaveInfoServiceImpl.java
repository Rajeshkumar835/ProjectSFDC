package com.intranet.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.entity.EmployeeLeaveInfo;
import com.intranet.repository.EmployeeLeaveInfoRepository;

@Service
public class EmployeeLeaveInfoServiceImpl implements EmployeeLeaveInfoService {
	@Autowired
	EmployeeLeaveInfoRepository employeeLeaveInfoRepository;
	
	@Override
	public EmployeeLeaveInfo save(EmployeeLeaveInfo empLeaveData) {
		return employeeLeaveInfoRepository.save(empLeaveData);
	}
	
	@Override
	public List<EmployeeLeaveInfo> findAll(){
		return employeeLeaveInfoRepository.findAll();
	}

}
