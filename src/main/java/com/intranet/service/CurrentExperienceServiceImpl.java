package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.entity.CurrentExperience;
import com.intranet.repository.CurrentExperienceRepository;

@Service
public class CurrentExperienceServiceImpl implements CurrentExperienceService {

	@Autowired
	private CurrentExperienceRepository currentExperienceRepository;

	@Override
	public List<CurrentExperience> findAll() {
		return currentExperienceRepository.findAll();
	}

	@Override
	public CurrentExperience save(CurrentExperience currentExperience) {
		return currentExperienceRepository.save(currentExperience);
	}

	@Override
	public Optional<CurrentExperience> findById(Long id) {
		return currentExperienceRepository.findById(id);
	}

	@Override
	public void deleteById(Long id) {
		currentExperienceRepository.deleteById(id);
	}

}
