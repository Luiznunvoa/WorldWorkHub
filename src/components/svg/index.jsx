import PropTypes from "prop-types";
import svg_data  from "../../assets/svg_data.json";

export function SVG({ className = "fill-text", type }) {
  const svgData = svg_data[type];

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
