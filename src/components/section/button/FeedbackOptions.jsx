import css from "./FeedbackOptions.module.css";
export const FeedbackOptions = ({ children, onClick, id }) => {
  return (
    <button type="button" onClick={onClick} id={id} className={css.button}>
      {children}
    </button>
  );
};
export default FeedbackOptions;
