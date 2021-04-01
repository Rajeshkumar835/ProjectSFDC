package com.intranet.service;

import java.util.List;
import java.util.Optional;

import com.intranet.dto.CompanyWeeklyOffDaysDTO;
import com.intranet.entity.CompanyWeeklyOffDaysList;

public interface CompanyWeeklyOffDaysListService {

	public CompanyWeeklyOffDaysList add(CompanyWeeklyOffDaysDTO companyWeeklyOffDaysDTO);

	public List<CompanyWeeklyOffDaysList> findAll();

	public CompanyWeeklyOffDaysList save(CompanyWeeklyOffDaysList holidayType);

	public Optional<CompanyWeeklyOffDaysList> findById(Long id);

	public void deleteById(Long id);

}
