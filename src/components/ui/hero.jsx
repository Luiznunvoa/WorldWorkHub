import { useNavigate } from "react-router";
import PropTypes from "prop-types";

/**
 * Hero Component
 * A Banner for a page
 *
 * Props:
 * - Hero(object)
 *  - title (string): Main text of the page.
 *  - subtitle (string): Subtext of the title
 *  - image (string): Path to main image
 *  - button (object): Object with label and function to the button
 */
export function Hero({ hero }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col-reverse justify-center items-center pt-10 w-full align-middle lg:flex-row lg:pt-0 h-[46rem] bg-custom_gradient">
        <div className="flex flex-col justify-center items-center w-full h-1/2 lg:h-full lg:w-[56rem]">
          <h1 className="text-5xl italic text-center sm:text-6xl lg:mt-40 xl:text-8xl font-archivo-black-regular">
            {hero.title}
          </h1>

          {hero.subtitle && (
            <p className="mt-5 text-lg text-center font-Roboto">
              {hero.subtitle}
            </p>
          )}

          {hero.button && (
            <button
              onClick={() => navigate(hero.button.path)}
              className="mt-10 w-1/2 h-16 font-bold border-solid transition duration-150 ease-in-out hover:shadow-2xl hover:scale-105 border-[0.1rem] border-outline bg-text font-kanit-thin text-text_secondary hover:outline hover:outline-8 hover:outline-offset-2 hover:outline-green"
            >
              {hero.button.label}
            </button>
          )}
        </div>
        {hero.image && (
          <img
            src={hero.image}
            alt={hero.title ? hero.title : hero.image}
            className="object-cover w-full h-1/2 lg:block lg:h-full lg:w-[48rem]"
            loading="eager"
          />
        )}
      </div>

      {hero.divider && (
        <div className="flex flex-row justify-center m-1 w-full text-sm lg:text-lg bg-text font-Roboto text-text_secondary">
          {hero.divider}
        </div>
      )}
    </div>
  );
}

Hero.propTypes = {
  hero: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    divider: PropTypes.string,

    button: PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  }),
};
