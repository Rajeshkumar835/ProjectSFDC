package com.intranet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.intranet.entity.ReportingManager;

public interface ReportingManagerRepository
		extends JpaRepository<ReportingManager, Long>, JpaSpecificationExecutor<ReportingManager> {

	@Query(value = "select * from reporting_manager where emp_code=:empCode", nativeQuery = true)
	public ReportingManager findByEmpCode(@Param("empCode") String empCode);

}
