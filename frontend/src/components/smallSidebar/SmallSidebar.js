import logo from "../../assets/images/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../actions/ui-actions";
import { NavLinks } from "../";
import Wrapper from "./styles";

const SmallSidebar = () => {
  const { showSidebar } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button
            type="button"
            className="close-btn"
            onClick={() => dispatch(toggleSidebar())}
          >
            <i className="fa-solid fa-times"></i>
          </button>

          <header>
            <img src={logo} alt="logo" className="logo" />
          </header>

          <NavLinks toggleSidebar={() => dispatch(toggleSidebar())} />
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
