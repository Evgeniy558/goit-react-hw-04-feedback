import css from "./notification.module.css";

const Notification = ({ children }) => {
  return (
    <div className={css.notification}>
      <>{children}</>
    </div>
  );
};
export default Notification;
