import { useSelector, useDispatch } from "react-redux";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { changePage } from "../../actions/job-actions";
import Wrapper from "./styles";

const Pagination = () => {
  const dispatch = useDispatch();
  const { numOfPages, page } = useSelector((state) => state.job);

  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };

  return (
    <Wrapper>
      <button type="button" className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {[...Array(numOfPages).keys()].map((item) => (
          <button
            type="button"
            className={item + 1 === page ? "pageBtn active" : "pageBtn"}
            key={item + 1}
            onClick={() => dispatch(changePage(item + 1))}
          >
            {item + 1}
          </button>
        ))}
      </div>
      <button type="button" className="next-btn" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};
export default Pagination;
