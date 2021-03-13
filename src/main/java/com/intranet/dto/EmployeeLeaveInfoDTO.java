package com.intranet.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Data
public class EmployeeLeaveInfoDTO {

	private String empCode;
	
	
	private String firstName;
	

	private long Id;

	
	private String middleName;
	

	private String emailId;
	

	private String leaveCode;

	
	private String leaveName;


	private Long leaveLimit;
	
	private Date fromDate;
	

	private Date toDate;
	
	
	private String leaveReason;
	

	private String status;
	
	
	private long totalLeaveGranted;
	
	
	private long leaveApplied;
	
	

}
