import css from "./section.module.css";
const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <div className={css.title}>{title}</div>

      <div className={css.children}>{children}</div>
    </section>
  );
};
export default Section;
