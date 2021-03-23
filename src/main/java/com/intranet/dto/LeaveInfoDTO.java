package com.intranet.dto;

import java.util.Date;

import lombok.Data;

@Data
public class LeaveInfoDTO {

	private Long id;

	private Date createdDate;

	private String leaveCode;

	private String leaveName;

	private Long leaveLimit;

	private String clientCode;

}
