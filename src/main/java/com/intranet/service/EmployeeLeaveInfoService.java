package com.intranet.service;

import java.util.List;

import com.intranet.entity.EmployeeLeaveInfo;

public interface EmployeeLeaveInfoService {
	
	public EmployeeLeaveInfo save(EmployeeLeaveInfo empLeaveData);
	public List<EmployeeLeaveInfo> findAll();

}
