import PropTypes from "prop-types";
import svg_data  from "../../assets/svg_data.json";

/**
 * SVG Component
 * Renders an SVG icon based on the provided type and optional className.
 * The icon data is retrieved from a JSON file and rendered as an SVG element.
 *
 * Props:
 * - className (string, optional): Custom class to style the SVG (default is "fill-text").
 * - type (string, required): The type of the SVG icon to render, which corresponds to a key in the svg_data JSON.
 *
 *   INFO: Available icons: "usa", "tap", "bar", "man", "suitcase", "graph", "smile", "heart", "bow", "target", "bolt", "signs", "paperpeople", "cursor", "calendar", "info", "support", "instagram", "github", 
 */
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
