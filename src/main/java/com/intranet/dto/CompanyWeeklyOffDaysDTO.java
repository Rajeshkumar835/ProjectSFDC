package com.intranet.dto;

import java.util.Date;

import lombok.Data;

@Data
public class CompanyWeeklyOffDaysDTO {

	private Long id;

	private Date createdDate;

	private String dayCode;

	private String clientCode;

}
