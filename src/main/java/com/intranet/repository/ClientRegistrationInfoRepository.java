package com.intranet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.intranet.entity.ClientRegistrationInfo;

public interface ClientRegistrationInfoRepository
		extends JpaRepository<ClientRegistrationInfo, String>, JpaSpecificationExecutor<ClientRegistrationInfo> {

	@Query(value = "select * from client_registration_info where client_code=:clientCode", nativeQuery = true)
	public ClientRegistrationInfo clientRegistrationInfoByClientCode(@Param("clientCode") String clientCode);
	
	@Query(value ="select * from client_registration_info where company_email=:companyEmail",nativeQuery = true)
	public ClientRegistrationInfo getClientInfoByEmailId(@Param("companyEmail") String companyEmail);
}
