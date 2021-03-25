package com.intranet.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.intranet.entity.AddressInfo;

public interface AddressInfoRepository extends JpaRepository<AddressInfo, Long>, JpaSpecificationExecutor<AddressInfo> {

	@Query(value = "select * from address_info where emp_code=:empCode", nativeQuery = true)
	public List<AddressInfo> findByEmpCode(@Param("empCode") String empCode);

}
