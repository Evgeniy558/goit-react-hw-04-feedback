import css from "./section.module.css";
import PropTypes from "prop-types";
const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <div className={css.title}>{title}</div>
      <div className={css.children}>{children}</div>
    </section>
  );
};
export default Section;
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
