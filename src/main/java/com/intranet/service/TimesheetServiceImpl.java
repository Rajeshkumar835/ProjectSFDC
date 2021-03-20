package com.intranet.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.dto.TimesheetDTO;
import com.intranet.entity.Timesheet;
import com.intranet.entity.TimesheetDetails;
import com.intranet.repository.TimesheetDetailsRepository;
import com.intranet.repository.TimesheetRepository;

@Service
public class TimesheetServiceImpl implements TimesheetService {

	@Autowired
	private TimesheetRepository timesheetRepository;

	@Autowired
	private TimesheetDetailsRepository timesheetDetailsRepository;

	public TimesheetDTO add(TimesheetDTO dto) {
		TimesheetDTO timesheetDTO = new TimesheetDTO();
		Timesheet timesheet = dto.getTimesheet();
		if (timesheet == null) {
			return new TimesheetDTO();
		}
		Timesheet timesheetsaved = timesheetRepository.save(timesheet);
		timesheetDTO.setTimesheet(timesheetsaved);
		Long timesheetId = timesheetsaved.getTimesheetId();

		List<TimesheetDetails> timesheetDetailsList = dto.getTimesheetDetails();
		for (TimesheetDetails time : timesheetDetailsList) {
			time.setTimesheetId(timesheetId);
			timesheetDetailsRepository.save(time);
		}
		timesheetDTO.setTimesheetDetails(timesheetDetailsList);

		return timesheetDTO;
	}

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

	@Override
	public List<TimesheetDTO> getAllTimesheetByEmpCode(String empCode, String startDate, String endDate) {
		List<TimesheetDTO> timesheetDTOList = new ArrayList<TimesheetDTO>();
		List<Timesheet> timesheetList = timesheetRepository.getAllTimesheetByEmpCode(empCode, startDate, endDate);
		for (Timesheet timesheet : timesheetList) {
			TimesheetDTO timesheetDTO = new TimesheetDTO();
			List<TimesheetDetails> timesheetDetailsList = timesheetDetailsRepository
					.getAllTimesheetDetailsByTimesheetId(timesheet.getTimesheetId());
			timesheetDTO.setTimesheet(timesheet);
			timesheetDTO.setTimesheetDetails(timesheetDetailsList);
			timesheetDTOList.add(timesheetDTO);
		}
		return timesheetDTOList;
	}

}
