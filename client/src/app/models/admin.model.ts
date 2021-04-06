export class ClientRegistrationInfo {
  public companyEmail: string;
  public companyLocation: string;
  public companyName: string;
  public companyTinVatNo: string;
  public clientCode: string;
  public password: string;
  public website: string;
}

export class ClientLogin {
  public companyEmail: string;
  public password: string;
}

export class HolidayType {
  public clientCode: string;
  public holidayCode: string;
  public holidayName: string;
}

export class HolidayList {
  public holidayId: number;
  public holidayDate: Date;
  public holidayName: string;
}
export class CompanyOffDays {
  public clientCode: string;
  public dayCode: string;
}
export class LeaveInfo {
  public clientCode: string;
  public leaveCode: string;
  public leaveName: string;
  public leaveLimit: number;
}
export class CreateEmployee {
  public empCode: string;
  public firstName: string;
  public lastName: string;
  public password: string;
  public clientCode: string;
  public contactNo: string;
  public managerCode: string;
}
