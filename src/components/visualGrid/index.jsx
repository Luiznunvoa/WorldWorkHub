import PropTypes from "prop-types";
import { SVG } from "../svg";

/**
 * VisualGrid Component
 * A responsive grid layout displaying a collection of visual elements, each with an optional image, title, subtitle, and description.
 * The grid automatically adjusts based on the available screen width.
 *
 * Props:
 * - icon (string, optional): Type of SVG icon to display alongside the title.
 * - title (string, optional): The main title of the grid.
 * - elements (array): An array of objects containing:
 *   - image (string, optional): URL of the image to display for each element.
 *   - title (string, optional): Title of the element.
 *   - subtitle (string, optional): Subtitle of the element.
 *   - description (string, optional): Description of the element.
 */
export function VisualGrid({ icon, title, elements }) {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <section className="flex flex-row items-center gap-5">
        {icon && 
          <SVG type={icon} className="h-10 w-10 fill-text" />
        }
        {title && (
          <h2 className="text-center font-kanit-thin text-3xl font-bold">
            {title}
          </h2>
        )}
      </section>

      <section className="grid w-9/12 max-w-[1427px] grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] justify-items-center gap-6 p-4 sm:grid-cols-2 xl:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
        {elements.map((element, index) => (
          <div
            key={index}
            className="m-10 flex w-60 flex-col items-center gap-3"
          >
            {element.image && (
              <img
                src={element.image}
                alt={element.image}
                className="h-60 w-full rounded-full border-4 border-solid border-white object-cover shadow-xl outline outline-offset-0 outline-text"
                loading="lazy"
              />
            )}

            {element.title && (
              <h3 className="w-9/12 text-center font-kanit-thin text-2xl font-bold italic">
                {element.title}
              </h3>
            )}

            {element.subtitle && (
              <p className="w-9/12 text-center font-Roboto italic">
                {element.subtitle}
              </p>
            )}

            {element.description && (
              <p className="w-9/12 text-center font-Roboto italic text-outline">
                {element.description}
              </p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

VisualGrid.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,

  elements: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      description: PropTypes.string,
    }).isRequired,
  ).isRequired,
};
