package com.intranet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.intranet.entity.CompanyHolidayList;

public interface CompanyHolidayListRepository
		extends JpaRepository<CompanyHolidayList, Long>, JpaSpecificationExecutor<CompanyHolidayList> {

}
