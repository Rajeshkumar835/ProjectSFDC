package com.intranet.service;

import java.util.List;
import java.util.Optional;

import com.intranet.entity.PreviousExperience;

public interface PreviousExperienceService {

	public List<PreviousExperience> findAll();

	public PreviousExperience save(PreviousExperience previousExperience);

	public Optional<PreviousExperience> findById(Long id);

	public void deleteById(Long id);

}
