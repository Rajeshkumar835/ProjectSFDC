//package com.intranet.service;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.intranet.dto.UniversityDTO;
//import com.intranet.entity.Course;
//import com.intranet.entity.University;
//import com.intranet.repository.CourseRepository;
//import com.intranet.repository.UniversityRepository;
//
//@Service
//public class UniversityServiceImpl implements UniversityService {
//
//	@Autowired
//	private UniversityRepository universityRepository;
//
//	@Autowired
//	private CourseRepository courseRepository;
//
//	@Override
//	public List<University> findAll() {
//		return universityRepository.findAll();
//	}
//
//	@Override
//	public University save(University university) {
//		return universityRepository.save(university);
//	}
//
//	@Override
//	public Optional<University> findById(Long id) {
//		return universityRepository.findById(id);
//	}
//
//	@Override
//	public void deleteById(Long id) {
//		universityRepository.deleteById(id);
//	}
//
////	@Override
////	public UniversityDTO add(UniversityDTO universityDTOObj) {
////		UniversityDTO universityDTO = new UniversityDTO();
////		University university = universityDTOObj.getUniversity();
////		if (university == null) {
////			return new UniversityDTO();
////		}
////		University universitySaved = universityRepository.save(university);
////		universityDTO.setUniversity(universitySaved);
////		Long universityId = universitySaved.getUniversityId();
////
////		List<Course> courseList = universityDTOObj.getCourse();
////		for (Course course : courseList) {
////			course.setUniversityId(universityId);
////			courseRepository.save(course);
////		}
////		universityDTO.setCourse(courseList);
////		return universityDTO;
////	}
//
//}
