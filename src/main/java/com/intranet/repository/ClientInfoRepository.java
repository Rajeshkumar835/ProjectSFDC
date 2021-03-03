package com.intranet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.intranet.entity.ClientInfo;

public interface ClientInfoRepository extends JpaRepository<ClientInfo, String>, JpaSpecificationExecutor<ClientInfo> {

}
