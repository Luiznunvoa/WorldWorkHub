import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";
import { Spinner } from "./spinner";

export function Icon({ icon, className = "w-5 h-5 fill-text" }) {
  return (
    <ReactSVG
      src={`/icons/${icon}.svg`}
      className={className}
      loading={() => (
        <span className="w-20 h-20">
          <Spinner />
        </span>
      )}
      fallback={() => (
        <span className="w-20 h-20">
          <Spinner />
        </span>
      )}
    />
  );
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};
