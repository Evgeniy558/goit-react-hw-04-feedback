import css from "./Statistics.module.css";
import PropTypes from "prop-types";
const Statistics = ({ children, feedBacksData, percentageRatio }) => {
  return (
    <>
      <div className={css.statistic}>
        {children}: {percentageRatio ? `${feedBacksData}%` : feedBacksData}
      </div>
    </>
  );
};
export default Statistics;
Statistics.propTypes = {
  feedBacksData: PropTypes.number.isRequired,
  percentageRatio: PropTypes.bool,
  children: PropTypes.string.isRequired,
};
