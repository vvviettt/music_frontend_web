import { LoginResponse } from "./interface";
import { LoginDataForm } from "@redux/slices/userSlice/interface";
export const loginApi = async (parameter: LoginDataForm) => {
  return new Promise<LoginResponse>((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve({
          data: { token: "pp", refreshToken: "ok" },
          message: "Đăng nhập thành công",
        });
      }, 3000);
    } catch (error) {}
  });
};
