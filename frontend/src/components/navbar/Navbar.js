import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assets/images/logo.svg";
import Wrapper from "./styles";
import { logout } from "../../actions/auth-actions";
import { toggleSidebar } from "../../actions/ui-actions";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => dispatch(toggleSidebar())}
        >
          <i className="fa-solid fa-align-left"></i>
        </button>

        <div>
          <img src={logo} alt="logo" className="logo" />
          <h3 className="logo-text">dashboard</h3>
        </div>

        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <i className="fa-solid fa-circle-user"></i>
            {user?.name}
            <i className="fa-solid fa-caret-down"></i>
          </button>
          <div className={showDropdown ? "dropdown show-dropdown" : "dropdown"}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => dispatch(logout())}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
