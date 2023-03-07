export interface UserInformation {
  id: string;
  name: string;
  role: "NORMAL" | "PREMIUM";
  createAt: number;
  updateAt: number;
}
