package com.intranet.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import com.intranet.dto.EmployeeLeaveInfoDTO;
import com.intranet.entity.EmployeeLeaveInfo;

public interface EmployeeLeaveInfoRepository extends JpaRepository<EmployeeLeaveInfo, Long>, JpaSpecificationExecutor<EmployeeLeaveInfo> {

	
//	@Query("SELECT new com.intranet.dto.EmployeeLeaveInfoDTO (E.firstName,E.lastName, E.emailId, e.empCode e.leave_id, e.leaveCode, e.fromDate, e.toDate, e.leaveReason, e.leaveApplied, e.status) "
//			+ "FROM EmployeeLeaveInfo e INNER JOIN e.EmployeeInfos E")
//	List<EmployeeLeaveInfoDTO> fetchEmpDeptDataInnerJoin();
}
