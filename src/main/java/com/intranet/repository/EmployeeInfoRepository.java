package com.intranet.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;


import com.intranet.entity.EmployeeInfo;
import com.intranet.model.EmpInfoLeaveMgmt;


public interface EmployeeInfoRepository
		extends JpaRepository<EmployeeInfo, String>, JpaSpecificationExecutor<EmployeeInfo> {
	
	@Query(value="select emp_code,first_name,middle_name,last_name,email_id from employee_info",nativeQuery = true)
	public List<EmpInfoLeaveMgmt> getEmployeeInfoList();

}
