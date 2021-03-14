package com.intranet.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import com.intranet.entity.EmployeeLeaveInfo;
import com.intranet.model.EmployeeLeaveInfoModel;

public interface EmployeeLeaveInfoRepository
		extends JpaRepository<EmployeeLeaveInfo, Long>, JpaSpecificationExecutor<EmployeeLeaveInfo> {

	@Query(value = "select employee_info.first_name,employee_info.middle_name,employee_info.last_name,employee_info.email_id,employee_leave_info.from_date,employee_leave_info.to_date,employee_leave_info.leave_applied,employee_leave_info.leave_reason,employee_leave_info.status,employee_leave_info.total_leave_granted,employee_leave_info.leave_code from employee_info,employee_leave_info", nativeQuery = true)
	List<EmployeeLeaveInfoModel> findAllEmployeeLeaveInfo();

}
