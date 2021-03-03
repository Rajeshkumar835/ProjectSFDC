package com.intranet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.intranet.entity.BankInfo;

public interface BankInfoRepository extends JpaRepository<BankInfo, Long>, JpaSpecificationExecutor<BankInfo> {

}
