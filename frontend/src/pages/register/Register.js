import { useState, useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import { FormRow, Alert } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { showAlert as displayAlert } from "../../actions/ui-actions";
import { register, login } from "../../actions/auth-actions";
import { useNavigate } from "react-router-dom";
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
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      dispatch(displayAlert());
      return;
    }

    if (isMember) {
      dispatch(login({ email, password }));
    } else {
      dispatch(register({ name, email, password }));
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

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
                  <i className="fa-solid fa-eye"></i>
                ) : (
                  <i className="fa-solid fa-eye-slash"></i>
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
