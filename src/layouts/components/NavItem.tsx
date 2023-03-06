import classNames from "classnames";
import { useState } from "react";
import { NavLink } from "react-router-dom";

type NavItem = {
  name: string;
  path: string;
  icon: React.FC<{ isActive: boolean }>;
};

const NavItem: React.FC<{ item: NavItem }> = ({ item }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <NavLink
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      to={item.path}
      className={"group block"}
      children={({ isActive, isPending }) => {
        return (
          <div className="flex h-10  items-center">
            <item.icon isActive={isActive || isHover} />
            <div className="w-3"></div>
            <span
              className={classNames(
                " group-hover:text-text-base text-[0.975rem] font-semibold transition-colors",
                {
                  "text-text-base": isActive,
                  "text-text-none-active": !isActive,
                }
              )}
            >
              {item.name}
            </span>
          </div>
        );
      }}
    />
  );
};

export default NavItem;
