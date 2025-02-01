import PropTypes from "prop-types";
import { IconTitle } from "../iconTitle";
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
export function VisualGrid({ visualGrid }) {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <IconTitle icon={visualGrid.icon} title={visualGrid.title} />

      <section className="grid gap-6 justify-items-center p-4 w-9/12 sm:grid-cols-2 max-w-[1427px] grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] xl:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
        {visualGrid.elements.map((element, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 items-center m-10 w-60"
          >
            {element.image && (
              <img
                src={element.image}
                alt={element.image}
                className="object-cover w-full h-60 rounded-full border-4 border-white border-solid shadow-xl outline outline-offset-0 outline-text"
                loading="lazy"
              />
            )}

            {element.title && (
              <h3 className="w-9/12 text-2xl italic font-bold text-center font-kanit-thin">
                {element.title}
              </h3>
            )}

            {element.subtitle && (
              <p className="w-9/12 italic text-center font-Roboto">
                {element.subtitle}
              </p>
            )}

            {element.description && (
              <p className="w-9/12 italic text-center font-Roboto text-outline">
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
  visualGrid: PropTypes.shape({
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
  }),
};
