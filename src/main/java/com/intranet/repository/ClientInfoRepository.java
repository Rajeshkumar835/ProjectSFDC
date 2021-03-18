package com.intranet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.intranet.entity.ClientRegistrationInfo;

public interface ClientInfoRepository extends JpaRepository<ClientRegistrationInfo, String>, JpaSpecificationExecutor<ClientRegistrationInfo> {

}
