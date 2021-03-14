package com.intranet.model;

import java.util.Date;

import lombok.Data;

@Data
public class EmployeeLeaveInfoModel {

	private String firstName;

	private String middleName;

	private String lastName;

	private String emailId;

	private Date fromDate;

	private Date toDate;

	private String leaveReason;

	private String status;

	private Long totalLeaveGranted;

	private String leaveCode;

	private Long leaveApplied;

}
