import PropTypes from "prop-types";
import svg_data from "../../assets/svg.json";

/**
 * Icon Component
 * Renders an Icon icon based on the provided type and optional className.
 * The icon data is retrieved from a JSON file and rendered as an Icon element.
 *
 * Props:
 * - className (string, optional): Custom class to style the Icon (default is "fill-text").
 * - type (string, required): The type of the Icon icon to render, which corresponds to a key in the svg_data JSON.
 *
 *   INFO: Available icons: "usa", "tap", "bar", "man", "suitcase", "graph", "smile", "heart", "bow", "target", "bolt", "signs", "paperpeople", "cursor", "calendar", "info", "support", "instagram", "github" "facebook", "linkedin"
 */
export function Icon({ className = "fill-text", type }) {
  const svgData = svg_data[type];

  if (!svgData) {
    console.error(`Icon type "${type}" not found.`);
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

Icon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
};
