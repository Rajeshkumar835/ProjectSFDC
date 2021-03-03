package com.intranet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.intranet.entity.CurrentExperience;

public interface CurrentExperienceRepository extends JpaRepository<CurrentExperience, Long>, JpaSpecificationExecutor<CurrentExperience> {

}
