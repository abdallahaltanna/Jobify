import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../../actions/job-actions";
import { Loading, StatsContainer, ChartsContainer } from "../../../components";

const Stats = () => {
  const { isLoading, stats, monthlyApplication } = useSelector(
    (state) => state.job
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showStats());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <StatsContainer stats={stats} />
      <ChartsContainer />
    </>
  );
};
export default Stats;
