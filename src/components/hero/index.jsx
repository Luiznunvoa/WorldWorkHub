import PropTypes from "prop-types";

export function Hero({ title, subtitle, image, button }) {
  return (
    <div className="flex h-[48rem] w-full flex-col-reverse items-center justify-center bg-custom_gradient pt-10 align-middle lg:flex-row lg:pt-0">
      <div className="flex h-1/2 w-full flex-col items-center justify-center lg:h-full lg:w-[52rem]">
        <h1 className="text-center font-archivo-black-regular text-5xl italic sm:text-6xl lg:mt-40 xl:text-8xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-5 text-center font-Roboto text-lg">{subtitle}</p>
        )}

        {button && (
          <button
            onClick={() => button.func()}
            className="mt-10 h-16 w-1/2 border-[0.1rem] border-solid border-outline bg-text font-kanit-thin font-bold text-text_secondary transition duration-150 ease-in-out hover:scale-105 hover:shadow-2xl hover:outline hover:outline-8 hover:outline-offset-2 hover:outline-green"
          >
            {button.label}
          </button>
        )}
      </div>
      {image && (
        <img
          src={image}
          alt={title ? title : image}
          loading="lazy"
          className="h-1/2 w-full object-cover lg:block lg:h-full lg:w-[48rem]"
        />
      )}
    </div>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string,

  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired,
  }),
};
