package com.intranet.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Data;

@Data
@Entity
public class PreviousExperience {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreationTimestamp
	private Date createdDate;

	@Column(nullable = false)
	private String company;

	@Column(nullable = false)
	private String designation;

	@Column(nullable = false)
	private double lastCtc;

	@Column(nullable = true, updatable = true)
	@Temporal(TemporalType.TIMESTAMP)
	private Date joiningdate;

	@Column(nullable = true, updatable = true)
	@Temporal(TemporalType.TIMESTAMP)
	private Date leavingDate;

	@ManyToOne
	@JoinColumn(name = "empCode", nullable = false)
	private EmployeeInfo employeeInfo;

}
