package com.intranet.dto;

import java.util.Date;

import lombok.Data;

@Data
public class EmployeeLeaveInfoDTO {

	private long id;

	private String empName;

	private String empCode;

	private String emailId;

	private Date createdDate;

	private Date fromDate;

	private Date toDate;

	private String leaveReason;

	private String status;
	
	private Long totalLeaveAvaiable;

	private long totalLeaveGranted;

	private long leaveApplied;

	private String rejectionReason;

	private String leaveCode;
	
	private String managerCode;

}
