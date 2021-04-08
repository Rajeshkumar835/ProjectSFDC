package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.entity.HolidayType;
import com.intranet.repository.HolidayTypeRepository;

@Service
public class HolidayTypeServiceImpl implements HolidayTypeService {

	@Autowired
	private HolidayTypeRepository holidayTypeRepository;

	@Autowired
	private ClientRegistrationInfoService clientRegistrationInfoService;

	@Override
	public HolidayType add(HolidayType holidayType) {
		HolidayType holidayTypeSaved = holidayTypeRepository.save(holidayType);
//		HolidayType holidayTypeObject = transformObject(holidayTypeDTO, new HolidayType());
//
//		HolidayType holidayTypeSaved = holidayTypeRepository.save(holidayTypeObject);
//		return holidayTypeSaved;
//	}
//
//	private HolidayType transformObject(HolidayTypeDTO holidayTypeDTO, HolidayType holidayType) {
//
//		ClientRegistrationInfo clientRegInfo = clientRegistrationInfoService
//				.clientRegistrationInfoByClientCode(holidayTypeDTO.getClientCode());
//
//		holidayType.setHolidayId(holidayTypeDTO.getHolidayId());
//		holidayType.setCreatedDate(holidayTypeDTO.getCreatedDate());
//		holidayType.setHolidayCode(holidayTypeDTO.getHolidayCode());
//		holidayType.setHolidayName(holidayTypeDTO.getHolidayName());
//		holidayType.setClientRegistrationInfo(clientRegInfo);

		return holidayTypeSaved;
	}

	@Override
	public List<HolidayType> findAll() {
		return holidayTypeRepository.findAll();
	}

	@Override
	public HolidayType save(HolidayType leaveInfo) {
		return holidayTypeRepository.save(leaveInfo);
	}

	@Override
	public Optional<HolidayType> findById(Long id) {
		return holidayTypeRepository.findById(id);
	}

	@Override
	public void deleteById(Long id) {
		holidayTypeRepository.deleteById(id);
	}

}
