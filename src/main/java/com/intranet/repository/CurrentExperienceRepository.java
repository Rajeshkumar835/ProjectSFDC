package com.intranet.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.intranet.entity.CurrentExperience;

public interface CurrentExperienceRepository
		extends JpaRepository<CurrentExperience, Long>, JpaSpecificationExecutor<CurrentExperience> {

	@Query(value = "select * from current_experience where emp_code=:empCode", nativeQuery = true)
	public List<CurrentExperience> findByEmpCode(@Param("empCode") String empCode);

}
