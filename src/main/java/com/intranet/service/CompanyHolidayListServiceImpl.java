package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.dto.CompanyHolidayListDTO;
import com.intranet.entity.CompanyHolidayList;
import com.intranet.entity.HolidayType;
import com.intranet.repository.CompanyHolidayListRepository;

@Service
public class CompanyHolidayListServiceImpl implements CompanyHolidayListService {

	@Autowired
	private CompanyHolidayListRepository companyHolidayListRepository;

	@Autowired
	private HolidayTypeService holidayTypeService;

	@Override
	public CompanyHolidayList add(CompanyHolidayListDTO companyHolidayListDTO) {
		CompanyHolidayList companyHolidayList = transformObject(companyHolidayListDTO, new CompanyHolidayList());

		CompanyHolidayList companyHolidayListSaved = companyHolidayListRepository.save(companyHolidayList);
		return companyHolidayListSaved;
	}

	private CompanyHolidayList transformObject(CompanyHolidayListDTO holidayTypeDTO,
			CompanyHolidayList companyHolidayList) {

		Optional<HolidayType> clientRegInfoOpt = holidayTypeService.findById(holidayTypeDTO.getHolidayId());
		HolidayType holidayType = null;
		if (clientRegInfoOpt.isPresent()) {
			holidayType = clientRegInfoOpt.get();
		} else {
			return null;
		}

		companyHolidayList.setId(holidayTypeDTO.getId());
		companyHolidayList.setCreatedDate(holidayTypeDTO.getCreatedDate());
		companyHolidayList.setHolidayDate(holidayTypeDTO.getHolidayDate());
		companyHolidayList.setHolidayName(holidayTypeDTO.getHolidayName());
		companyHolidayList.setHolidayType(holidayType);

		return companyHolidayList;
	}

	@Override
	public List<CompanyHolidayList> findAll() {
		return companyHolidayListRepository.findAll();
	}

	@Override
	public CompanyHolidayList save(CompanyHolidayList leaveInfo) {
		return companyHolidayListRepository.save(leaveInfo);
	}

	@Override
	public Optional<CompanyHolidayList> findById(Long id) {
		return companyHolidayListRepository.findById(id);
	}

	@Override
	public void deleteById(Long id) {
		companyHolidayListRepository.deleteById(id);
	}

}
