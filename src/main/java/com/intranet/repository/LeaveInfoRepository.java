package com.intranet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.intranet.entity.LeaveInfo;

public interface LeaveInfoRepository extends JpaRepository<LeaveInfo, Long>, JpaSpecificationExecutor<LeaveInfo> {

	@Query(value = "SELECT * from leave_info where leave_code=:leaveCode", nativeQuery = true)
	public LeaveInfo findByLeaveCode(@Param("leaveCode") String leaveCode);
}
