package com.intranet.service;

import java.util.List;
import java.util.Optional;

import com.intranet.entity.Timesheet;

public interface TimesheetService {

	public List<Timesheet> findAll();

	public Timesheet save(Timesheet clientInfo);

	public Optional<Timesheet> findById(Long id);

	public void deleteById(Long id);

}
