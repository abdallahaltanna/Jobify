import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getJobs } from "../../actions/job-actions";
import { Job } from "../";
import Wrapper from "./styles";
import { Loading, Pagination } from "../";

const JobsContainer = () => {
  const dispatch = useDispatch();
  const {
    jobs,
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    numOfPages,
    totalJobs,
    page,
  } = useSelector((state) => state.job);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch, search, searchStatus, searchType, sort, page]);

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
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"}
      </h5>
      <div className="jobs">
        {jobs.map((job, index) => (
          <Job key={index} job={job} />
        ))}
      </div>
      {numOfPages > 1 && <Pagination />}
    </Wrapper>
  );
};
export default JobsContainer;
