import PropTypes from "prop-types";
import { SVG } from "../svg";

/**
 * Panels Component
 * A layout to display a collection of panels with an optional icon, title, and detailed places.
 *
 * Props:
 * - icon (string, optional): Type of SVG icon to display alongside the title.
 * - title (string, optional): The main title of the panel.
 * - places (array): An array of objects containing:
 *   - image (string): URL of the image to display.
 *   - description (string): Text description of the place.
 */
export function Panels({ icon, title, places }) {
  return (
    <div className="flex flex-col items-center gap-10">
      <section className="flex flex-row items-center gap-5">
        {icon && <SVG type={icon} className="h-10 w-10 fill-text" />}
        {title && (
          <h2 className="text-center font-kanit-thin text-3xl font-bold">
            {title}
          </h2>
        )}
      </section>

      {places.map((place, index) => (
        <section
          key={index}
          className={`flex ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} w-full max-w-[1920px] flex-col-reverse items-center justify-center gap-20`}
        >
          <p className="w-5/6 text-center font-archivo-black-regular text-xl lg:w-2/5">
            {place.description}
          </p>

          <div className="h-60 w-96 rounded-lg bg-green shadow-2xl lg:border-4 lg:border-solid lg:border-text">
            <img
              src={place.image}
              className={`container object-cover lg:mt-10 ${index % 2 == 0 ? "lg:-ml-10" : "lg:ml-10"} rounded-lg border-4 border-text bg-text shadow-xl outline outline-4 outline-green`}
              alt={`City ${index + 1}`}
              loading="lazy"
            />

            <SVG
              type="cursor"
              className={`absolute -mt-12 h-20 w-20 fill-text stroke-green stroke-1 ${index % 2 === 0 ? "ml-20 rotate-90" : "ml-64"}`}
            />
          </div>
        </section>
      ))}
    </div>
  );
}

Panels.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,

  places: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
