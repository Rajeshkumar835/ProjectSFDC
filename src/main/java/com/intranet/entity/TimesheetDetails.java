package com.intranet.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class TimesheetDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
	private long id;

	@Column(nullable = true)
	private String project;

	@Column(nullable = true)
	private Long hour;

	@Column(nullable = true)
	private String comments;

	private Long timesheetId;

//	@ManyToOne
//	@JoinColumn(name = "timesheetId", nullable = false)
//	private Timesheet timesheet;

}
