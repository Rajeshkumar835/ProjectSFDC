package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.entity.QualificationInfo;
import com.intranet.repository.QualificationInfoRepository;

@Service
public class QualificationInfoServiceImpl implements QualificationInfoService {

	@Autowired
	private QualificationInfoRepository qualificationInfoRepository;

	@Override
	public List<QualificationInfo> findAll() {
		return qualificationInfoRepository.findAll();
	}

	@Override
	public QualificationInfo save(QualificationInfo qualificationInfo) {
		return qualificationInfoRepository.save(qualificationInfo);
	}

	@Override
	public Optional<QualificationInfo> findById(Long id) {
		return qualificationInfoRepository.findById(id);
	}

	@Override
	public void deleteById(Long id) {
		qualificationInfoRepository.deleteById(id);
	}

	@Override
	public List<QualificationInfo> findByEmpCode(String empCode) {
		List<QualificationInfo> qInfo = qualificationInfoRepository.findByEmpCode(empCode);
		return qInfo;
	}

}
