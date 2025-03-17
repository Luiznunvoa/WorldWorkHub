import PropTypes from "prop-types";

/**
 * Panels Component
 * A layout to display a collection of panels with an optional icon, title, and detailed places.
 *
 * Props:
 * - panels (object): Object containing the component content
 *    - icon (string, optional): Type of Icon icon to display alongside the title.
 *    - title (string, optional): The main title of the panel.
 *    - places (array): An array of objects containing:
 *      - image (string): URL of the image to display.
 */
export function ElementsColumn({ array }) {
  return (
    <div className="flex flex-col gap-10 items-center mb-14">

      {array.map(({ element }, index ) => (
        
        <div
          key={index}
          className="flex lg:flex-row w-full max-w-[1920px] flex-col-reverse items-center justify-center gap-20"
        >
          {element}
        </div>
      ))}
    </div>
  );
}

ElementsColumn.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      element: PropTypes.node,
    })
  ).isRequired,
};
