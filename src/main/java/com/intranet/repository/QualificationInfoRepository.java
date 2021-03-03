package com.intranet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.intranet.entity.QualificationInfo;

public interface QualificationInfoRepository
		extends JpaRepository<QualificationInfo, Long>, JpaSpecificationExecutor<QualificationInfo> {

}
