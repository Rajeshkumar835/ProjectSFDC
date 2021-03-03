package com.intranet.service;

import java.util.List;
import java.util.Optional;

import com.intranet.entity.QualificationInfo;

public interface QualificationInfoService {

	public List<QualificationInfo> findAll();

	public QualificationInfo save(QualificationInfo qualificationInfo);

	public Optional<QualificationInfo> findById(Long id);

	public void deleteById(Long id);

}
