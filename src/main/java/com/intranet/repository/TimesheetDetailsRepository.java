package com.intranet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.intranet.entity.TimesheetDetails;

public interface TimesheetDetailsRepository
		extends JpaRepository<TimesheetDetails, Long>, JpaSpecificationExecutor<TimesheetDetails> {

}
