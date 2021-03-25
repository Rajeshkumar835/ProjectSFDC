package com.intranet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.intranet.entity.CreateEmployee;

public interface CreateEmployeeRepository
		extends JpaRepository<CreateEmployee, String>, JpaSpecificationExecutor<CreateEmployee> {

	@Query(value = "SELECT * from create_employee where emp_code=:empCode", nativeQuery = true)
	public CreateEmployee findByLeaveCode(@Param("empCode") String empCode);
}
