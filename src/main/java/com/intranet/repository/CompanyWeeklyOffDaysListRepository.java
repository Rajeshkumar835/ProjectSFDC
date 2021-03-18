package com.intranet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.intranet.entity.CompanyWeeklyOffDaysList;

public interface CompanyWeeklyOffDaysListRepository
		extends JpaRepository<CompanyWeeklyOffDaysList, Long>, JpaSpecificationExecutor<CompanyWeeklyOffDaysList> {

}
