import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import { StatsItem } from "../";
import Wrapper from "./styles";

const StatsContainer = ({ stats }) => {
  const statsData = [
    {
      title: "pending applications",
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      icon: <FaBug />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];

  return (
    <Wrapper>
      {statsData.map((item, index) => (
        <StatsItem key={index} {...item} />
      ))}
    </Wrapper>
  );
};
export default StatsContainer;
