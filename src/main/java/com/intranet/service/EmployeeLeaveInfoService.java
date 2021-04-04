package com.intranet.service;

import java.util.List;
import java.util.Optional;

import com.intranet.dto.EmployeeLeaveInfoDTO;
import com.intranet.entity.EmployeeLeaveInfo;
import com.intranet.entity.LeaveInfo;
import com.intranet.model.EmployeeLeaveInfoModel;

public interface EmployeeLeaveInfoService {

	public EmployeeLeaveInfo add(EmployeeLeaveInfoDTO employeeLeaveInfoDTO);

	public EmployeeLeaveInfo save(EmployeeLeaveInfo empLeaveData);
	public Optional<EmployeeLeaveInfo> findById(Long id);     

	public List<EmployeeLeaveInfo> findAll();

//	public List<EmployeeLeaveInfoModel> findAllEmployeeLeaveInfo();
	List<EmployeeLeaveInfo> findAllLeaveInfoByStatus(String managerCode);

	public List<EmployeeLeaveInfo> findAllLeaveInfoByEmpCode(String empCode);
	public List<EmployeeLeaveInfo> findLeaveInfoByEmpCodeandLeaveCode(String empCode, String leaveCode);

}
