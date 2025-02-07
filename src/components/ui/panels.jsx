import PropTypes from "prop-types";
import { IconTitle } from "./iconTitle";
import { Icon } from "./icon";

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
export function Panels({ panels }) {
  return (
    <div className="flex flex-col gap-10 items-center mb-14">
      <IconTitle icon={panels.icon} title={panels.title} />

      {panels.places.map((place, index) => (
        <section
          key={index}
          className={`flex ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} w-full max-w-[1920px] flex-col-reverse items-center justify-center gap-20`}
        >
          <p className="w-5/6 text-xl text-center lg:w-2/5 font-archivo-black-regular">
            {place.description}
          </p>

          <div className="w-96 h-60 rounded-lg shadow-2xl lg:border-4 lg:border-solid bg-green lg:border-text">
            <img
              src={place.image}
              className={`container object-cover lg:mt-10 ${index % 2 == 0 ? "lg:-ml-10" : "lg:ml-10"} rounded-lg border-4 border-text bg-text shadow-xl outline outline-4 outline-green`}
              alt={`City ${index + 1}`}
              loading="lazy"
            />

            <Icon
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
  panels: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    places: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};
