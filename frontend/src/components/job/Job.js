import { JobInfo } from "../";
import { FaLocationArrow, FaCalendarAlt, FaBriefcase } from "react-icons/fa";
import moment from "moment";
import Wrapper from "./styles";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    _id: id,
    createdAt,
    position,
    company,
    status,
    jobType,
    jobLocation,
  } = job;

  const date = moment(createdAt).format("MMM Do, YYYY");

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link to="/add-job" className="btn edit-btn">
              Edit
            </Link>
            <button type="button" className="btn delete-btn">
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Job;
