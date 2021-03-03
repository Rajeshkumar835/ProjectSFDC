package com.intranet.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Data
@Entity
public class ReportingManager {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String reportingManagercode;

	@Column(nullable = true)
	private String name;

	@Column(nullable = true, updatable = true)
	@Temporal(TemporalType.TIMESTAMP)
	private Date startDate;

	@Column(nullable = true, updatable = true)
	@Temporal(TemporalType.TIMESTAMP)
	private Date endDate;

	@OneToOne
	@JoinColumn(name = "empCode", nullable = false)
	private EmployeeInfo employeeInfo;

}
