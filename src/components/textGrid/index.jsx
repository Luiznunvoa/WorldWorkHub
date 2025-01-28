import PropTypes from "prop-types";
import { SVG } from "../svg";

/**
 * TextGrid Component
 * A grid layout that displays a series of elements with icons, titles, and descriptions.
 * The elements are displayed in a flexible grid layout with hover effects.
 *
 * Props:
 * - icon (string, optional): Type of SVG icon to display alongside the title.
 * - title (string, optional): The main title of the grid.
 * - elements (array): An array of objects containing:
 *   - icon (string): Type of SVG icon to display for each element.
 *   - title (string): Title of the element.
 *   - description (string): Description of the element.
 */
export function TextGrid({ icon, title, elements }) {
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <section className="flex flex-row items-center gap-5">
        {icon && <SVG type={icon} className="h-10 w-10 fill-text" />}
        {title && (
          <h2 className="text-center font-kanit-thin text-3xl font-bold">
            {title}
          </h2>
        )}
      </section>

      <section className="grid grid-cols-1 items-center justify-center gap-10 md:grid-cols-2">
        {elements.map((element, index) => (
          <div
            key={index}
            className="flex cursor-pointer flex-row gap-5 rounded-2xl border-4 border-solid border-text bg-white px-2 py-8 shadow-xl transition-all hover:scale-110 hover:shadow-2xl"
          >
            <div className="flex h-full flex-col">
              <SVG
                type={element.icon}
                className="h-24 w-20 fill-white stroke-green stroke-1"
              />
            </div>

            <div className="flex h-full max-w-80 flex-col justify-center gap-5">
              <h3 className="text-start font-kanit-thin text-2xl font-bold italic">
                {element.title}
              </h3>

              <p className="text-start font-Roboto italic">
                {element.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

TextGrid.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,

  elements: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    }).isRequired,
  ),
};
