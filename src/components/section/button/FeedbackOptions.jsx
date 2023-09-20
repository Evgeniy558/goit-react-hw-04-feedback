import css from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";
export const FeedbackOptions = ({ children, onClick, id }) => {
  return (
    <button type="button" onClick={onClick} id={id} className={css.button}>
      {children}
    </button>
  );
};
export default FeedbackOptions;
FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
