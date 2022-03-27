import logo from "../../assets/images/logo.svg";
import { useSelector } from "react-redux";
import { NavLinks } from "../";
import Wrapper from "./styles";

const SmallSidebar = () => {
  const { showSidebar } = useSelector((state) => state.ui);

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <header>
            <img src={logo} alt="logo" className="logo" />
          </header>

          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
