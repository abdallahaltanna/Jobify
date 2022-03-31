import { FormRow, FormSelect, Alert } from "../../../components";
import { useSelector, useDispatch } from "react-redux";
import {
  handleChanges,
  clearValues,
  createJob,
} from "../../../actions/job-actions";
import { showAlert as displayAlert } from "../../../actions/ui-actions";
import Wrapper from "./styles";

const AddJob = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    isEditing,
    editJobId,
    jobLocation,
    position,
    company,
    jobTypeOptions,
    jobType,
    jobStatusOptions,
    status,
  } = useSelector((state) => state.job);
  const { showAlert } = useSelector((state) => state.ui);

  const handleAddJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    dispatch(handleChanges({ name, value }));
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      dispatch(displayAlert());
      return;
    }
    if (isEditing) {
      return;
    }
    dispatch(createJob());
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={submitFormHandler}>
        <h3>{isEditing ? "Edit Job" : "Add Job"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            name="position"
            type="text"
            value={position}
            handleChange={handleAddJobInput}
          />
          <FormRow
            name="company"
            type="text"
            value={company}
            handleChange={handleAddJobInput}
          />
          <FormRow
            name="jobLocation"
            type="text"
            labelText="job location"
            value={jobLocation}
            handleChange={handleAddJobInput}
          />
          <FormSelect
            name="status"
            value={status}
            handleChange={handleAddJobInput}
            list={jobStatusOptions}
          />
          <FormSelect
            name="jobType"
            value={jobType}
            handleChange={handleAddJobInput}
            list={jobTypeOptions}
          />

          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block"
              disabled={isLoading}
            >
              submit
            </button>
            <button
              type="button"
              className="btn clear-btn"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJob;
