import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";
import { Spinner } from "./spinner";
/**
 * Icon Component
 * Uses ReactSVG to create inline SVG components in the html
 *
 * Props:
 * - icon (string): Name of the icon
 * - className (string): Classes added to the > class
 * INFO: Available icons: bow calendar cursor facebook github graph heart icon instagram linkedin man paperpeople smile suitcase support tap target usa 
 */
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
