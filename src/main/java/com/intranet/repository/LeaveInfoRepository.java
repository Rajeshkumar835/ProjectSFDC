package com.intranet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.intranet.entity.LeaveInfo;

public interface LeaveInfoRepository extends JpaRepository<LeaveInfo, Long>, JpaSpecificationExecutor<LeaveInfo> {

}
