import PropTypes from "prop-types"
import { ReactSVG } from "react-svg";
import { Spinner } from "./spinner";

export function Icon({ icon, className="fill-text h-5 w-5" }) {
  return (
    <ReactSVG
      src={`../../../public/icons/${icon}.svg`}
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
  className: PropTypes.string
}
