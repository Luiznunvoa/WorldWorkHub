import PropTypes from "prop-types";
import { Icon } from "./icon";

/**
 * Highlight Component
 * A grid layout showcasing highlights with text and icons.
 *
 * Props:
 * - highlights (array): An array of objects containing:
 *   - text (string): Text to display.
 *   - blackIcon (string): Type of black icon to display.
 *   - greenIcon (string): Type of green icon to display.
 *   - animation (string, optional): Additional animation classes for the black icon.
 */
export const Highlight = ({ highlights }) => (
  <div className="grid gap-6 justify-center items-center p-4 sm:grid-cols-2 xl:flex xl:flex-row grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] xl:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
    {highlights.map(({ text, blackIcon, greenIcon, animation = "" }, index) => (
      <section
        key={index}
        className="flex flex-row gap-5 justify-center items-center"
      >
        <p className="w-40 text-lg text-center font-archivo-black-regular">
          {text}
        </p>

        <div className="flex relative flex-row">
          <Icon icon={greenIcon} className="w-40 h-40 fill-green" />
          <Icon
            icon={blackIcon}
            className={`fill-tex absolute mt-8 h-20 w-20 ${animation}`}
          />
        </div>
      </section>
    ))}
  </div>
);

Highlight.propTypes = {
  highlights: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      blackIcon: PropTypes.string.isRequired,
      greenIcon: PropTypes.string.isRequired,
      animation: PropTypes.string,
    }).isRequired,
  ).isRequired,
};
