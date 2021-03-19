package com.intranet.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import com.intranet.dto.TimesheetDTO;
import com.intranet.entity.Timesheet;

public interface TimesheetService {

	public List<Timesheet> findAll();

	public Timesheet save(Timesheet clientInfo);

	public TimesheetDTO add(TimesheetDTO dto);

	public Optional<Timesheet> findById(Long id);

	public void deleteById(Long id);

	public List<TimesheetDTO> getAllTimesheetByEmpCode(String empCode, Date startDate, Date endDate);

}
