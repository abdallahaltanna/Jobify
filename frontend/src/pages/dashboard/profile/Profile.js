import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, FormRow } from "../../../components";
import { showAlert as displayAlert } from "../../../actions/ui-actions";
import { updateUserProfile } from "../../../actions/auth-actions";
import Wrapper from "./styles";

const Profile = () => {
  const { isLoading, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const initialState = {
    name: user?.name,
    lastName: user?.lastName,
    email: user?.email,
    location: user?.location,
  };

  const [values, setValues] = useState(initialState);
  const { showAlert } = useSelector((state) => state.ui);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const { name, lastName, email, location } = values;
    if (!name || !lastName || !email || !location) {
      dispatch(displayAlert());
      return;
    }
    dispatch(updateUserProfile({ name, lastName, email, location }));
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={submitFormHandler}>
        <h3>profile</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            name="name"
            type="text"
            value={values.name}
            handleChange={handleChange}
          />

          <FormRow
            name="lastName"
            type="text"
            labelText="last name"
            value={values.lastName}
            handleChange={handleChange}
          />

          <FormRow
            name="email"
            type="email"
            value={values.email}
            handleChange={handleChange}
          />

          <FormRow
            name="location"
            type="text"
            value={values.location}
            handleChange={handleChange}
          />

          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "Save Changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default Profile;
