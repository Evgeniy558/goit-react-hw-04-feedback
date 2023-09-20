import css from "./notification.module.css";
import PropTypes from "prop-types";
const Notification = ({ message }) => {
  return (
    <div className={css.notification}>
      <>{message}</>
    </div>
  );
};
export default Notification;
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
