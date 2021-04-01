package com.intranet.dto;

import java.util.Date;

import lombok.Data;

@Data
public class EmployeeCreationDTO {

	private String empCode;

	private Date createdDate;

	private String firstName;

	private String contactNo;

	private String lastName;

	private String password;

	private String clientCode;

	private String managerCode;

}
