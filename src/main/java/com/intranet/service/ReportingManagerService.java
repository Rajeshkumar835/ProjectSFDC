package com.intranet.service;

import java.util.List;
import java.util.Optional;

import com.intranet.entity.ReportingManager;

public interface ReportingManagerService {

	public List<ReportingManager> findAll();

	public ReportingManager save(ReportingManager reportingManager);

	public Optional<ReportingManager> findById(Long id);

	public void deleteById(Long id);

}
