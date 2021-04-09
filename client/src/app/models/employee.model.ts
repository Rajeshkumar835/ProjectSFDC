export class Employee {}

export class AddressInfo {
  public addressLine1: string;
  public addressLine2: string;
  public addressType: string;
  public city: string;
  public country: string;
  public empCode: string;
  public state: string;
  public zipCode: string;
}

export class BankInfo {
  public bankAccNo: string;
  public bankAddress: string;
  public bankName: string;
  public bankType: string;
  public empCode: string;
  public ifsCode: string;
  public routingNumber: string;
}

export class CurrentExperience {
  public company: string;
  public designation: string;
  public empCode: string;
  public endDate: Date;
  public startDate: Date;
}

export class PreviousExperience {
  public company: string;
  public designation: string;
  public empCode: string;
  public lastCtc: number;
  public joiningdate: Date;
  public leavingDate: Date;
}

export class EmployeeInfo {
  public contactNo: string;
  public currSalary: number;
  public designation: string;
  public dob: Date;
  public emailId: string;
  public empCode: string;
  public fatherName: string;
  public firstName: string;
  public hireDate: Date;
  public homePhoneNo: string;
  public lastName: string;
  public middleName: string;
  public panCardNo: string;
  public passportNo: string;
}

export class QualificationInfo {
  public comments: string;
  public empCode: string;
  public highest: boolean;
  public qualification: string;
  public type: string;
}

export class ReportingManager {
  public designation: string;
  public empCode: string;
  public endDate: Date;
  public managerName: string;
  public reportingManagercode: string;
  public startDate: Date;
}