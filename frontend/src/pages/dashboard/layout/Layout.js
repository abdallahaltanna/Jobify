import { Outlet } from "react-router-dom";
import { Navbar, SmallSidebar, BigSidebar } from "../../../components";
import Wrapper from "./styles";

const Layout = () => {
  return (
    <Wrapper>
      <SmallSidebar />
      <BigSidebar />
      <div>
        <Navbar />
        <div className="dashboard-page">
          <Outlet />
        </div>
      </div>
    </Wrapper>
  );
};
export default Layout;
