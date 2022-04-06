import { FormRow, FormSelect } from "../";
import { useSelector, useDispatch } from "react-redux";
import { handleChanges, clearFilters } from "../../actions/job-actions";
import Wrapper from "./styles";

const SearchContainer = () => {
  const {
    isLoading,
    jobTypeOptions,
    jobStatusOptions,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
  } = useSelector((state) => state.job);
  const dispatch = useDispatch();

  const handleFilters = (e) => {
    if (isLoading) return;
    dispatch(handleChanges({ name: e.target.name, value: e.target.value }));
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>filter</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleFilters}
          />

          <FormSelect
            name="searchStatus"
            value={searchStatus}
            labelText="status"
            list={["all", ...jobStatusOptions]}
            handleChange={handleFilters}
          />

          <FormSelect
            name="searchType"
            value={searchType}
            labelText="Type"
            list={["all", ...jobTypeOptions]}
            handleChange={handleFilters}
          />

          <FormSelect
            name="sort"
            value={sort}
            list={sortOptions}
            handleChange={handleFilters}
          />

          <button
            type="button"
            className="btn btn-block btn-danger"
            onClick={() => dispatch(clearFilters())}
            disabled={isLoading}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default SearchContainer;
