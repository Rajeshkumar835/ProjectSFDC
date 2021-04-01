package com.intranet.dto;

import java.util.Date;
import java.util.List;

import com.intranet.entity.AddressInfo;
import com.intranet.entity.BankInfo;
import com.intranet.entity.CurrentExperience;
import com.intranet.entity.PreviousExperience;
import com.intranet.entity.QualificationInfo;

import lombok.Data;

@Data
public class EmployeeInfoDTO {

	private String empCode;

	private Date createdDate;

	private String firstName;

	private String middleName;

	private String lastName;

	private String designation;

	private Date hireDate;

	private Double currSalary;

	private Date dob;

	private String password;

	private String fatherName;

	private String contactNo;

	private String emailId;

	private String homePhoneNo;

	private String passportNo;

	private String panCardNo;

	private String clientCode;

	private String managerCode;

	private List<QualificationInfo> qualificationInfo;

	private List<BankInfo> bankInfo;

	private List<AddressInfo> addressInfo;

	private List<CurrentExperience> currentExperience;

	private List<PreviousExperience> previousExperience;

}
