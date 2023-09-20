import css from "./Statistics.module.css";
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
