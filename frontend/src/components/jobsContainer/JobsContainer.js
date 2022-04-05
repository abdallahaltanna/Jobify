import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getJobs } from "../../actions/job-actions";
import { Job } from "../";
import Wrapper from "./styles";
import { Loading } from "../";

const JobsContainer = () => {
  const dispatch = useDispatch();
  const { jobs, isLoading } = useSelector((state) => state.job);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

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
