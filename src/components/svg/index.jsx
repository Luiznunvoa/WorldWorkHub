import PropTypes from "prop-types";
import { SVG_DATA } from "../../assets";

export function SVG({ className = "fill-text", type }) {
  const svgData = SVG_DATA[type];

  if (!svgData) {
    console.error(`SVG type "${type}" not found.`);
    return null;
  }

  return (
    <svg className={className} viewBox={svgData.viewBox}>
      {svgData.paths.map((d, index) => (
        <path key={index} d={d} />
      ))}
    </svg>
  );
}

SVG.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
};
