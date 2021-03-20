package com.intranet.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.intranet.entity.QualificationInfo;

public interface QualificationInfoRepository
		extends JpaRepository<QualificationInfo, Long>, JpaSpecificationExecutor<QualificationInfo> {

	@Query(value = "select * from qualification_info where emp_code=:empCode", nativeQuery = true)
	public List<QualificationInfo> findByEmpCode(@Param("empCode") String empCode);

}
