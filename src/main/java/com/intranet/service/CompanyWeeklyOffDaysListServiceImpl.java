package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.dto.CompanyWeeklyOffDaysDTO;
import com.intranet.entity.ClientRegistrationInfo;
import com.intranet.entity.CompanyWeeklyOffDaysList;
import com.intranet.repository.CompanyWeeklyOffDaysListRepository;

@Service
public class CompanyWeeklyOffDaysListServiceImpl implements CompanyWeeklyOffDaysListService {

	@Autowired
	private CompanyWeeklyOffDaysListRepository holidayTypeRepository;

	@Autowired
	private ClientRegistrationInfoService clientRegistrationInfoService;

	@Override
	public CompanyWeeklyOffDaysList add(CompanyWeeklyOffDaysDTO companyWeeklyOffDaysDTO) {
		CompanyWeeklyOffDaysList holidayTypeObject = transformObject(companyWeeklyOffDaysDTO,
				new CompanyWeeklyOffDaysList());

		CompanyWeeklyOffDaysList holidayTypeSaved = holidayTypeRepository.save(holidayTypeObject);
		return holidayTypeSaved;
	}

	private CompanyWeeklyOffDaysList transformObject(CompanyWeeklyOffDaysDTO companyWeeklyOffDaysDTO,
			CompanyWeeklyOffDaysList companyWeeklyOffDaysList) {

		ClientRegistrationInfo clientRegInfo = clientRegistrationInfoService
				.clientRegistrationInfoByClientCode(companyWeeklyOffDaysDTO.getClientCode());

		companyWeeklyOffDaysList.setId(companyWeeklyOffDaysDTO.getId());
		companyWeeklyOffDaysList.setCreatedDate(companyWeeklyOffDaysDTO.getCreatedDate());
		companyWeeklyOffDaysList.setDayCode(companyWeeklyOffDaysDTO.getDayCode());
		companyWeeklyOffDaysList.setClientRegistrationInfo(clientRegInfo);

		return companyWeeklyOffDaysList;
	}

	@Override
	public List<CompanyWeeklyOffDaysList> findAll() {
		return holidayTypeRepository.findAll();
	}

	@Override
	public CompanyWeeklyOffDaysList save(CompanyWeeklyOffDaysList companyWeeklyOffDaysList) {
		return holidayTypeRepository.save(companyWeeklyOffDaysList);
	}

	@Override
	public Optional<CompanyWeeklyOffDaysList> findById(Long id) {
		return holidayTypeRepository.findById(id);
	}

	@Override
	public void deleteById(Long id) {
		holidayTypeRepository.deleteById(id);
	}

}
