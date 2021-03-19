package com.intranet.service;

import java.util.List;
import java.util.Optional;

import com.intranet.dto.CompanyHolidayListDTO;
import com.intranet.entity.CompanyHolidayList;

public interface CompanyHolidayListService {

	public CompanyHolidayList add(CompanyHolidayListDTO companyHolidayListDTO);

	public List<CompanyHolidayList> findAll();

	public CompanyHolidayList save(CompanyHolidayList holidayType);

	public Optional<CompanyHolidayList> findById(Long id);

	public void deleteById(Long id);

}
