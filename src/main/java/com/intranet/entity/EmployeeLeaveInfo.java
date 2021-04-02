package com.intranet.entity;

import java.util.Date;

import javax.persistence.CascadeType;
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
public class EmployeeLeaveInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
	private Long leaveId;

	@Column(nullable = true)
	private String empCode;
	
	@Column(nullable = true)
	private String empName;
	
	@Column(nullable = true)
	private String emailId;

	@Column(updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreationTimestamp
	private Date createdDate;

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
	private Long totalLeaveAvaiable;

	@Column(nullable = true)
	private Long totalLeaveGranted;

	@Column(nullable = true)
	private Long leaveApplied;
	
	@Column(nullable = true)
	private String rejectionReason;
	
	@Column(nullable = true)
	private String managerCode;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "leave_code")
	private LeaveInfo leaveInfo;

}
