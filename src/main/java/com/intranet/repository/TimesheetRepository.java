package com.intranet.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.intranet.entity.Timesheet;

public interface TimesheetRepository extends JpaRepository<Timesheet, Long>, JpaSpecificationExecutor<Timesheet> {


	@Query(value = "SELECT * FROM timesheet where emp_code=:empCode and attedance_date between :startDate and :endDate", nativeQuery = true)
	public List<Timesheet> getAllTimesheetByEmpCode(@Param("empCode") String empCode, @Param("startDate")String startDate,@Param("endDate")String endDate);
}
