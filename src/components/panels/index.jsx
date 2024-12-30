import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useScrollTrigger } from "../../utils";
import { SVG } from "../svg";

export function Panels({ icon, title, places }) {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useScrollTrigger(sectionRef, () => setAnimate(true));

  return (
    <div ref={sectionRef} className="m-10 flex flex-col items-center gap-10">
      <section className="flex flex-row items-center gap-5">
        {icon && <SVG type={icon} className="h-10 w-10 fill-text" />}
        {title && (
          <h2 className="text-center font-kanit-thin text-3xl font-bold">
            {title}
          </h2>
        )}
      </section>
      {animate &&
        places.map((place, index) => (
          <section
            key={index}
            className={`flex ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} min-h-1 w-full max-w-[1920px] animate-show flex-col-reverse items-center justify-center gap-20`}
          >
            <p className="w-5/6 text-center font-archivo-black-regular text-xl lg:w-2/5">
              {place.description}
            </p>

            <div className="h-60 w-96 rounded-lg bg-green shadow-2xl lg:border-4 lg:border-solid lg:border-text">
              <img
                src={place.image}
                className={`h-full w-full object-cover lg:mt-10 ${index % 2 == 0 ? "lg:-ml-10" : "lg:ml-10"} animate-show rounded-lg border-4 border-solid border-text bg-text shadow-xl outline outline-4 outline-green`}
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
