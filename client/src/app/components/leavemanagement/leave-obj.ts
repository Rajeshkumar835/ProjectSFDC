export interface LeaveObj {
  id: number;
  name: string;
  empCode: string;
  createdDate: Date;
  leavecode: string;
  fromDate: Date;
  toDate: Date;
  leaveReason: string;
  status: string;
  totalLeaveGranted: number;
  leaveApplied: number;
  rejectionReason: string;
}
