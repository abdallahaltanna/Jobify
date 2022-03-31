import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getJobs } from "../../actions/job-actions";
import { Job } from "../";
import Wrapper from "./styles";

const JobsContainer = () => {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.job);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  return (
    <Wrapper>
      <h5>jobs</h5>
      <div className="jobs">
        {jobs.map((job, index) => (
          <Job key={index} job={job} />
        ))}
      </div>
    </Wrapper>
  );
};
export default JobsContainer;
