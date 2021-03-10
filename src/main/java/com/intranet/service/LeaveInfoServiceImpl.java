package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.entity.LeaveInfo;
import com.intranet.repository.LeaveInfoRepository;

@Service
public class LeaveInfoServiceImpl implements LeaveInfoService {

	@Autowired
	private LeaveInfoRepository leaveInfoRepository;

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

}
