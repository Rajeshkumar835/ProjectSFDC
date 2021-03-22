package com.intranet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.intranet.entity.HolidayType;

public interface HolidayTypeRepository extends JpaRepository<HolidayType, Long>, JpaSpecificationExecutor<HolidayType> {

}
