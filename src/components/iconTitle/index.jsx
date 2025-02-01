import PropTypes from "prop-types";
import { SVG } from "../svg";

export function IconTitle({ icon, title }) {
  return (
    <section className="flex flex-row gap-5 items-center">
      {icon && <SVG type={icon} className="w-10 h-10 fill-text" />}
      {title && (
        <h2 className="text-3xl font-bold text-center font-kanit-thin">
          {title}
        </h2>
      )}
    </section>
  );
}

IconTitle.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
};
