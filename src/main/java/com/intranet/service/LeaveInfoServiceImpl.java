package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.dto.LeaveInfoDTO;
import com.intranet.entity.ClientRegistrationInfo;
import com.intranet.entity.LeaveInfo;
import com.intranet.repository.LeaveInfoRepository;

@Service
public class LeaveInfoServiceImpl implements LeaveInfoService {

	@Autowired
	private LeaveInfoRepository leaveInfoRepository;

	@Autowired
	private ClientRegistrationInfoService clientRegistrationInfoService;

	@Override
	public LeaveInfo add(LeaveInfoDTO leaveInfoDTO) {
		LeaveInfo leaveInfoObject = transformObject(leaveInfoDTO, new LeaveInfo());

		LeaveInfo leaveInfoSaved = leaveInfoRepository.save(leaveInfoObject);
		return leaveInfoSaved;
	}

	private LeaveInfo transformObject(LeaveInfoDTO leaveInfoDTO, LeaveInfo leaveInfo) {

		ClientRegistrationInfo clientRegInfo = clientRegistrationInfoService
				.clientRegistrationInfoByClientCode(leaveInfoDTO.getClientCode());

		leaveInfo.setId(leaveInfoDTO.getId());
		leaveInfo.setCreatedDate(leaveInfoDTO.getCreatedDate());
		leaveInfo.setLeaveCode(leaveInfoDTO.getLeaveCode());
		leaveInfo.setLeaveName(leaveInfoDTO.getLeaveName());
		leaveInfo.setLeaveLimit(leaveInfoDTO.getLeaveLimit());
		leaveInfo.setClientRegistrationInfo(clientRegInfo);

		return leaveInfo;
	}

	@Override
	public List<LeaveInfo> findAll() {
		return leaveInfoRepository.findAll();
	}

	@Override
	public LeaveInfo save(LeaveInfo leaveInfo) {
		return leaveInfoRepository.save(leaveInfo);
	}

	@Override
	public Optional<LeaveInfo> findById(Long id) {
		return leaveInfoRepository.findById(id);
	}

	@Override
	public void deleteById(Long id) {
		leaveInfoRepository.deleteById(id);
	}

	@Override
	public LeaveInfo findByLeaveCode(String leaveCode) {
		LeaveInfo leaveInfo = leaveInfoRepository.findByLeaveCode(leaveCode);
		if (leaveInfo == null) {
			return new LeaveInfo();
		}
		return leaveInfo;
	}

}
