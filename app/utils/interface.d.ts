export interface StandardResponse {
  success: boolean;
  message: string;
}
export interface BlockedIpsModel {
  ipAddress: string;
  dates: string[];
  currentStrike: string;
}
