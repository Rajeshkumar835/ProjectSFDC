package com.intranet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.intranet.entity.PreviousExperience;

public interface PreviousExperienceRepository
		extends JpaRepository<PreviousExperience, Long>, JpaSpecificationExecutor<PreviousExperience> {

}
