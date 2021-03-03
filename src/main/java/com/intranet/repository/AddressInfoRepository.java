package com.intranet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.intranet.entity.AddressInfo;

public interface AddressInfoRepository extends JpaRepository<AddressInfo, Long>, JpaSpecificationExecutor<AddressInfo> {

}
