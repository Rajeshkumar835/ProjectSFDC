package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.entity.Timesheet;
import com.intranet.repository.TimesheetRepository;

@Service
public class TimesheetServiceImpl implements TimesheetService {

	@Autowired
	private TimesheetRepository timesheetRepository;

	@Override
	public List<Timesheet> findAll() {
		return timesheetRepository.findAll();
	}

	@Override
	public Timesheet save(Timesheet clientInfo) {
		return timesheetRepository.save(clientInfo);
	}

	@Override
	public Optional<Timesheet> findById(Long id) {
		return timesheetRepository.findById(id);
	}

	@Override
	public void deleteById(Long id) {
		timesheetRepository.deleteById(id);
	}

}
