export interface LoginDataForm {
  email: string;
  password: string;
  isRemember: boolean;
}

export interface UserInformation {
  id: string;
  name: string;
  role: "NORMAL" | "PREMIUM";
  createAt: number;
  updateAt: number;
}
