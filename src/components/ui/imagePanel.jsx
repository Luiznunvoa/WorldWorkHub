import { PropTypes } from "prop-types";
import { Icon } from "./icon";

export function ImagePannel(image, text, icon, left) {
  return (
    <>
      <p className="w-5/6 text-xl text-center lg:w-2/5 font-archivo-black-regular">
        {left && text}
      </p>

      <div className="w-96 h-60 rounded-lg shadow-2xl lg:border-4 lg:border-solid bg-green lg:border-text">
        <img
          src={image}
          className="container object-cover rounded-lg border-4 shadow-xl lg:mt-10 lg:-ml-10 border-text bg-text outline outline-4 outline-green"
          alt={`Houses`}
          loading="lazy"
        />

        <Icon
          icon={icon}
          className="absolute -mt-12 h-20 w-20 fill-text stroke-green stroke-1 ${index % 2 === 0 ? ml-20 "
        />
      </div>
      <p className="w-5/6 text-xl text-center lg:w-2/5 font-archivo-black-regular">
        {!left && text}
      </p>
    </>
  );
}

ImagePannel.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  left: PropTypes.bool,
};
