import FacebookIcon from "@assets/icons/FacebookIcon";
import GoogleIcon from "@assets/icons/GoogleIcon";
import AuthButton from "@components/AuthButton";
import { LoginForm } from "@components/form";

const LoginPage: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[30rem]">
        <AuthButton
          classnamesWrapper="bg-blue border-none "
          classnamesText="text-white"
          icon={<FacebookIcon />}
          name="Tiếp tục bằng facebook"
        />
        <AuthButton icon={<GoogleIcon />} name="Tiếp tục bằng facebook" />

        <div className="flex justify-center items-center ">
          <div className="h-0.5 bg-gray-300 flex-1"></div>
          <p className="px-2 font-bold">Hoặc</p>
          <div className="h-0.5 bg-gray-300 flex-1"></div>
        </div>
        <LoginForm />
        <div className="mt-6 h-0.5 bg-gray-300" />
        <p className=" text-center mt-8 font-bold">
          Bạn có tài chưa có tài khoản?
        </p>
        <AuthButton classnamesWrapper="mt-5" name="Đăng ký tài khoản" />
      </div>
    </div>
  );
};

export default LoginPage;
