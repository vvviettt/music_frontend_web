import { UserInformation } from "@redux/slices/userSlice/interface";
export interface LoginResponse {
  data: {
    token: string;
    refreshToken: string;
  };
  message: string;
}
