package com.intranet.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.intranet.entity.EmployeeLeaveInfo;

public interface EmployeeLeaveInfoRepository
		extends JpaRepository<EmployeeLeaveInfo, Long>, JpaSpecificationExecutor<EmployeeLeaveInfo> {

//	@Query(value = "select employee_info.first_name,employee_info.middle_name,employee_info.last_name,employee_info.email_id,employee_leave_info.from_date,employee_leave_info.to_date,employee_leave_info.leave_applied,employee_leave_info.leave_reason,employee_leave_info.status,employee_leave_info.total_leave_granted,employee_leave_info.leave_code from employee_info,employee_leave_info", nativeQuery = true)
//	List<EmployeeLeaveInfoModel> findAllEmployeeLeaveInfo();

	@Query(value = "select * from employee_leave_info where  emp_code=:empCode", nativeQuery = true)
	List<EmployeeLeaveInfo> findAllLeaveInfoByEmpCode(@Param("empCode") String empCode);
	
	@Query(value="select * from employee_leave_info where status='Applied' ", nativeQuery = true)
	List<EmployeeLeaveInfo> findAllLeaveInfoByStatus();
	
	@Query(value = "select * from employee_leave_info where  emp_code=:empCode AND leave_code=(select leave_info.id from leave_info where leave_code=:leaveCode) order by leave_code DESC limit 1", nativeQuery = true)
	List<EmployeeLeaveInfo> findLeaveInfoByEmpCodeandLeaveCode(@Param("empCode")String empCode, @Param("leaveCode") String leaveCode);
}
