import PropTypes from "prop-types";

/**
 * Highlight Component
 * A grid layout showcasing array with text and icons.
 *
 * Props:
 * - array (array): An array of objects containing:
 *   - text (string): Text to display.
 *   - blackIcon (string): Type of black icon to display.
 *   - greenIcon (string): Type of green icon to display.
 *   - animation (string, optional): Additional animation classes for the black icon.
 */
export const ElementsArray = ({ array }) => (
  <div className="grid gap-6 justify-center items-center p-4 sm:grid-cols-2 xl:flex xl:flex-row grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] xl:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
    {array.map(({ element }, index) => (
      <section
        key={index}
        className="flex flex-row gap-5 justify-center items-center"
      >
        {element}
      </section>
    ))}
  </div>
);

ElementsArray.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      element: PropTypes.node,
    })
  ).isRequired,
};
