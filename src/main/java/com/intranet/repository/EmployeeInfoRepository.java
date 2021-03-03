package com.intranet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.intranet.entity.EmployeeInfo;

public interface EmployeeInfoRepository
		extends JpaRepository<EmployeeInfo, String>, JpaSpecificationExecutor<EmployeeInfo> {

}
