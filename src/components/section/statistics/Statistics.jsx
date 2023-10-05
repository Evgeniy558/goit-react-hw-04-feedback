import css from "./Statistics.module.css";
import PropTypes from "prop-types";
const Statistics = ({ children, feedBacksData }) => {
  return (
    <>
      <div className={css.statistic}>
        {children}: {feedBacksData}
      </div>
    </>
  );
};
export default Statistics;
Statistics.propTypes = {
  feedBacksData: PropTypes.number.isRequired,
};
