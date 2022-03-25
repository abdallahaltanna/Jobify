import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import { FormRow, Alert } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { displayAlert, clearAlert } from "../../store/slices/ui-slice";
import Wrapper from "./styles";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const { showAlert } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    const { name, email, password } = values;

    if (!name || !email || password) {
      dispatch(displayAlert());

      setTimeout(() => {
        dispatch(clearAlert());
      }, 3000);
    }
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={submitForm}>
        <img src={logo} alt="logo" className="logo" />
        <h3>{values.isMember ? "sign in" : "sign up"}</h3>
        {showAlert && <Alert />}

        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        )}

        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        />

        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <div className="form-input">
            <input
              className="form-input-password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            {values.password.length > 0 && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="toggle_password"
              >
                {showPassword ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </button>
            )}
          </div>
        </div>

        <button type="submit" className="btn btn-block">
          {values.isMember ? "Sign In" : "Sign Up"}
        </button>

        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button
            type="button"
            className="member-btn"
            onClick={() => setValues({ ...values, isMember: !values.isMember })}
          >
            {values.isMember ? "Create Account" : "Sign In Instead"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
