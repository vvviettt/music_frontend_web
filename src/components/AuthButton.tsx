import classNames from "classnames";

type AuthButtonType = {
  icon?: JSX.Element;
  name: string;
  classnamesWrapper?: string;
  classnamesText?: string;
};

const AuthButton: React.FC<AuthButtonType> = ({
  icon,
  name,
  classnamesWrapper,
  classnamesText,
}) => {
  return (
    <button
      className={classNames(
        "h-12 border border-black py-[7px] px-[31px] rounded-full w-full mb-5 flex items-center justify-center",
        classnamesWrapper
      )}
    >
      {icon}
      <span
        className={classNames(
          "text-[0.875rem] font-CircularSp font-bold uppercase pl-2.5",
          classnamesText
        )}
      >
        {name}
      </span>
    </button>
  );
};

export default AuthButton;
