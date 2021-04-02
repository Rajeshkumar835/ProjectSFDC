package com.intranet.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.intranet.entity.FavouriteCourse;

public interface FavouriteCourseRepository extends JpaRepository<FavouriteCourse, Long>, JpaSpecificationExecutor<FavouriteCourse>{

	@Query(value = "select * from favourite_course where course_code =:courseCode", nativeQuery = true)
	Optional<FavouriteCourse> findByCode(@Param("courseCode") String courseCode);
	
	@Query(value = "select * from favourite_course where emp_code =:empCode", nativeQuery = true)
	List<FavouriteCourse> getAllFavouriteCourseByEmpCode(@Param("empCode") String empCode);

}
