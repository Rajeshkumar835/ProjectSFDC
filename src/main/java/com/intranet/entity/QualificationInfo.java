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

@Data
@Entity
public class QualificationInfo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreationTimestamp
	private Date createdDate;

	@Column(nullable = true)
	private String type;

	@Column(nullable = true)
	private boolean isHighest;

	@Column(nullable = true)
	private String qualification;

	@Column(nullable = true)
	private String comments;
	
	@Column(nullable = true)
	private String empCode;

//	@ManyToOne
//	@JoinColumn(name = "empCode")
//	private EmployeeInfo employeeInfo;

}
