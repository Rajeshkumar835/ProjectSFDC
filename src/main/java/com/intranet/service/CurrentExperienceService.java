package com.intranet.service;

import java.util.List;
import java.util.Optional;

import com.intranet.entity.CurrentExperience;

public interface CurrentExperienceService {

	public List<CurrentExperience> findAll();

	public CurrentExperience save(CurrentExperience currentExperience);

	public Optional<CurrentExperience> findById(Long id);

	public void deleteById(Long id);

}
