package com.intranet.service;

import java.util.List;

import com.intranet.dto.EmployeeLeaveInfoDTO;
import com.intranet.entity.EmployeeLeaveInfo;
import com.intranet.model.EmployeeLeaveInfoModel;

public interface EmployeeLeaveInfoService {

	public EmployeeLeaveInfo add(EmployeeLeaveInfoDTO employeeLeaveInfoDTO);

	public EmployeeLeaveInfo save(EmployeeLeaveInfo empLeaveData);

	public List<EmployeeLeaveInfo> findAll();

//	public List<EmployeeLeaveInfoModel> findAllEmployeeLeaveInfo();

	public List<EmployeeLeaveInfo> findAllLeaveInfoByEmpCode(String empCode);

}
