package com.intranet.service;

import java.util.List;
import java.util.Optional;

import com.intranet.entity.LeaveInfo;

public interface LeaveInfoService {

	public List<LeaveInfo> findAll();

	public LeaveInfo save(LeaveInfo leaveInfo);

	public Optional<LeaveInfo> findById(Long id);

	public void deleteById(Long id);
	
	public LeaveInfo findByLeaveCode(String leaveCode);

}
