import { useState } from "react";
import { BarChart, AreaChart } from "../";
import { useSelector } from "react-redux";
import Wrapper from "./styles";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((state) => state.job);

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "area chart" : "bar chart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};
export default ChartsContainer;
