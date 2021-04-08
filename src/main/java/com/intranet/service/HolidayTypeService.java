package com.intranet.service;

import java.util.List;
import java.util.Optional;

import com.intranet.entity.HolidayType;

public interface HolidayTypeService {

	public HolidayType add(HolidayType holidayType);

	public List<HolidayType> findAll();

	public HolidayType save(HolidayType holidayType);

	public Optional<HolidayType> findById(Long id);

	public void deleteById(Long id);

}
