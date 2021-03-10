package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.entity.ReportingManager;
import com.intranet.repository.ReportingManagerRepository;

@Service
public class ReportingManagerServiceImpl implements ReportingManagerService {

	@Autowired
	private ReportingManagerRepository reportingManagerRepository;

	@Override
	public List<ReportingManager> findAll() {
		return reportingManagerRepository.findAll();
	}

	@Override
	public ReportingManager save(ReportingManager reportingManager) {
		return reportingManagerRepository.save(reportingManager);
	}

	@Override
	public Optional<ReportingManager> findById(Long id) {
		return reportingManagerRepository.findById(id);
	}

	@Override
	public void deleteById(Long id) {
		reportingManagerRepository.deleteById(id);
	}

}
