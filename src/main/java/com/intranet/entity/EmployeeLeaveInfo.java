package com.intranet.entity;

import java.util.Date;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.ManyToOne;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Data;

@Data
@Entity
public class EmployeeLeaveInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "leave_id", nullable = false)
	private long Id;
	
	@Column(nullable = true)
	private String empCode;

	@Column(updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreationTimestamp
	private Date createdDate;
	
	@Column(nullable = true)
	private String leaveCode;
		
	@Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = true)
	private Date fromDate;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = true)
	private Date toDate;
	
	@Column(nullable = true)
	private String leaveReason;
	
	@Column(nullable = true)
	private String status;
	
	@Column(nullable = true)
	private long totalLeaveGranted;
	
	@Column(nullable = true)
	private long leaveApplied;
	
	@Column(nullable = true)
	private String rejectionReason;
	
	

}
