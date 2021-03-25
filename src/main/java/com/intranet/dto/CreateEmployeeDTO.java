package com.intranet.dto;

import java.util.Date;

import lombok.Data;

@Data
public class CreateEmployeeDTO {

	private String empCode;

	private Date createdDate;

	private String empName;

	private String contactNo;

	private String dob;

	private String clientCode;

}
