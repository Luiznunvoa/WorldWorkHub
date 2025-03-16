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
export function Hero({ image, divider = "", hero = <></>,  }) {

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col-reverse justify-center items-center pt-10 w-full align-middle lg:flex-row lg:pt-0 h-[46rem] bg-custom_gradient">
        {hero}
       
        {image && (
          <img
            src={image}
            alt="hero"
            className="object-cover w-full h-1/2 lg:block lg:h-full lg:w-[48rem]"
            loading="eager"
          />
        )}
      </div>

      {divider && (
        <div className="flex flex-row justify-center m-1 w-full text-sm lg:text-lg bg-text font-Roboto text-text_secondary">
          {divider}
        </div>
      )}
    </div>
  );
}

Hero.propTypes = {
  image: PropTypes.string,
  divider: PropTypes.string,
  hero: PropTypes.node,
};
