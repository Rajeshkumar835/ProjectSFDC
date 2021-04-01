package com.intranet.entity;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Data;

@Entity
@Data
public class FavouriteCourse {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Temporal(TemporalType.TIMESTAMP)
	@CreationTimestamp
	@Column(updatable = false)
	private Date createdOn;
	
	@Column(nullable = true)
	private String courseCode;
	
	@Column(nullable = true)
	private String empCode;

	
}
