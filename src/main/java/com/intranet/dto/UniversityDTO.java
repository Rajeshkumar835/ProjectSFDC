package com.intranet.dto;

import java.util.List;

import com.intranet.entity.Course;
import com.intranet.entity.University;

import lombok.Data;

@Data
public class UniversityDTO {

	private University university;

	private List<Course> course;

}
