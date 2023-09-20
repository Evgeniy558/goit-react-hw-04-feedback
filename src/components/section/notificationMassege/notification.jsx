import css from "./notification.module.css";
const Notification = ({ message }) => {
  return (
    <div className={css.notification}>
      <>{message}</>
    </div>
  );
};
export default Notification;
