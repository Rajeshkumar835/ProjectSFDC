export interface LeaveObj {
  name: string;
  empCode: string;
  createdDate: Date;
  leaveType: string;
  fromDate: Date;
  toDate: Date;
  leaveReason: string;
  status: string;
  totalLeaveGranted: number;
  leaveApplied: number;
  rejectionReason: string;
}
