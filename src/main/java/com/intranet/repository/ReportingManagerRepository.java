package com.intranet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.intranet.entity.ReportingManager;

public interface ReportingManagerRepository
		extends JpaRepository<ReportingManager, Long>, JpaSpecificationExecutor<ReportingManager> {

}
