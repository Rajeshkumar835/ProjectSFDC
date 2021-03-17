package com.intranet.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.intranet.entity.TimesheetDetails;

public interface TimesheetDetailsRepository
		extends JpaRepository<TimesheetDetails, Long>, JpaSpecificationExecutor<TimesheetDetails> {

	@Query(value = "SELECT * FROM timesheet_details where timesheet_id=:timesheetId", nativeQuery = true)
	List<TimesheetDetails> getAllTimesheetDetailsByTimesheetId(@Param("timesheetId") Long timesheetId);
}
