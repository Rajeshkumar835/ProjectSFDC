package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.entity.CompanyWeeklyOffDaysList;
import com.intranet.repository.CompanyWeeklyOffDaysListRepository;

@Service
public class CompanyWeeklyOffDaysListServiceImpl implements CompanyWeeklyOffDaysListService {

	@Autowired
	private CompanyWeeklyOffDaysListRepository weeklyOffDaysRepository;

	@Autowired
	private ClientRegistrationInfoService clientRegistrationInfoService;

	@Override
	public CompanyWeeklyOffDaysList add(CompanyWeeklyOffDaysList companyWeeklyOffDays) {

		CompanyWeeklyOffDaysList companyWeeklyOffDaysListSaved = weeklyOffDaysRepository.save(companyWeeklyOffDays);
//		CompanyWeeklyOffDaysList holidayTypeObject = transformObject(companyWeeklyOffDaysDTO,
//				new CompanyWeeklyOffDaysList());
//
//		CompanyWeeklyOffDaysList holidayTypeSaved = holidayTypeRepository.save(holidayTypeObject);
//		return holidayTypeSaved;
//	}
//
//	private CompanyWeeklyOffDaysList transformObject(CompanyWeeklyOffDaysDTO companyWeeklyOffDaysDTO,
//			CompanyWeeklyOffDaysList companyWeeklyOffDaysList) {
//
//		ClientRegistrationInfo clientRegInfo = clientRegistrationInfoService
//				.clientRegistrationInfoByClientCode(companyWeeklyOffDaysDTO.getClientCode());
//
//		companyWeeklyOffDaysList.setId(companyWeeklyOffDaysDTO.getId());
//		companyWeeklyOffDaysList.setCreatedDate(companyWeeklyOffDaysDTO.getCreatedDate());
//		companyWeeklyOffDaysList.setDayCode(companyWeeklyOffDaysDTO.getDayCode());
//		companyWeeklyOffDaysList.setClientRegistrationInfo(clientRegInfo);

		return companyWeeklyOffDaysListSaved;
	}

	@Override
	public List<CompanyWeeklyOffDaysList> findAll() {
		return weeklyOffDaysRepository.findAll();
	}

	@Override
	public CompanyWeeklyOffDaysList save(CompanyWeeklyOffDaysList companyWeeklyOffDaysList) {
		return weeklyOffDaysRepository.save(companyWeeklyOffDaysList);
	}

	@Override
	public Optional<CompanyWeeklyOffDaysList> findById(Long id) {
		return weeklyOffDaysRepository.findById(id);
	}

	@Override
	public void deleteById(Long id) {
		weeklyOffDaysRepository.deleteById(id);
	}

}
