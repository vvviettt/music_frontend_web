import Input from "@components/Input";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

interface LoginState {
  email: string;
  password: string;
  isRemember: boolean;
}

export const LoginForm: React.FC = () => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().required(),
    isRemember: Joi.boolean(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginState>({
    resolver: joiResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: LoginState) => {
    console.log("====================================");
    console.log(data);
    console.log("====================================");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
      <Input
        label="Email của bạn là gì?"
        placeholder="Email"
        errorText={errors.email?.message}
        {...register("email")}
        autoComplete="off"
      />
      <Input
        label="Mật khẩu nữa!"
        placeholder="Mật khẩu"
        errorText={errors.password?.message}
        {...register("password")}
        type={"password"}
        autoComplete="off"
      />
      <Link
        className="underline text-black font-bold"
        to="account/forgot-password"
      >
        Bạn đã quên mật khẩu?
      </Link>
      <div className="flex justify-between items-start mt-3">
        <label className="flex items-center" htmlFor="remember-me">
          <input id="remember-me" type="checkbox" {...register("isRemember")} />
          <p className="text-[0.875rem] pl-2">Hãy nhớ tôi</p>
        </label>
        <button
          className="bg-success text-black text-[0.875rem] font-bold uppercase h-12 px-8 rounded-3xl relative overflow-hidden group"
          type="submit"
        >
          Đăng nhập
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10 group-hover:opacity-0"></div>
        </button>
      </div>
    </form>
  );
};
