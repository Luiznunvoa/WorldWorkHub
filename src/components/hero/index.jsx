import PropTypes from "prop-types";

export function Hero({ title, subtitle, image, button }) {

  return (
    <div className="flex lg:flex-row lg:pt-0 justify-center align-middle h-[48rem] w-full bg-custom_gradient flex-col-reverse items-center pt-10">
      <div className="flex flex-col justify-center items-center lg:h-full h-1/2 lg:w-[48rem] w-full">

        <h1 className="xl:text-8xl sm:text-6xl lg:mt-40 italic font-archivo-black-regular text-center text-5xl max-w-[48rem]">
          {title}
        </h1>

        { subtitle &&
          <p className="text-lg mt-5 font-Roboto text-center">
            {subtitle}
          </p>
        }

        { button &&
          <button onClick={() => button.func()} className="bg-text border-solid border-outline border-[0.1rem] text-text_secondary mt-10 w-1/2 h-16 font-kanit-thin font-bold hover:scale-105 transition duration-150 ease-in-out hover:shadow-2xl hover:outline hover:outline-8 hover:outline-green hover:outline-offset-2">
            { button.label}
          </button>
        }

      </div>
      { image &&
        <img
          src={image}
          alt={title ? title : image}
          loading="lazy"
          className="lg:h-full lg:w-[48rem] lg:block h-1/2 w-full object-cover"
        />
      }
    </div>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired
  })
};
