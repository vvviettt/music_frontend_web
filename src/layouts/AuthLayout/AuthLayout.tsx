import Logo from "@assets/icons/Logo";
import { Outlet } from "react-router-dom";

export const AuthLayout: React.FC = () => {
  return (
    <>
      <div className="w-full flex justify-center my-8">
        <Logo className="h-8" fill="#000000" />
      </div>
      <Outlet />
    </>
  );
};
