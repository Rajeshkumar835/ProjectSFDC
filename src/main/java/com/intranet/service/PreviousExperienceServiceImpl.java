package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.entity.PreviousExperience;
import com.intranet.repository.PreviousExperienceRepository;

@Service
public class PreviousExperienceServiceImpl implements PreviousExperienceService {

	@Autowired
	private PreviousExperienceRepository previousExperienceRepository;

	@Override
	public List<PreviousExperience> findAll() {
		return previousExperienceRepository.findAll();
	}

	@Override
	public PreviousExperience save(PreviousExperience previousExperience) {
		return previousExperienceRepository.save(previousExperience);
	}

	@Override
	public Optional<PreviousExperience> findById(Long id) {
		return previousExperienceRepository.findById(id);
	}

	@Override
	public void deleteById(Long id) {
		previousExperienceRepository.deleteById(id);
	}

}
