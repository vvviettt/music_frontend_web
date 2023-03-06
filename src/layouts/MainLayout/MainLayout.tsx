import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
// import classNames from "classnames";

const MainLayout: React.FC = () => {
  return (
    <div className={"flex"}>
      <Sidebar />
      <Outlet />
    </div>
  );
};
export default MainLayout;
