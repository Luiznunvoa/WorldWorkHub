import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useScrollTrigger } from "../../utils/scroll_trigger";
import { SVG } from "../../utils/custom_svg";

export function Places({ places }) {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useScrollTrigger(sectionRef, () => setAnimate(true));

  return (
    <div ref={sectionRef} className="flex flex-col items-center gap-10 m-10">
      <section className="flex flex-row gap-5 items-center">
        <SVG type="signs" className="fill-text h-10 w-10" />
        <h2 className="text-3xl font-bold font-kanit-thin text-center">Go Beyond</h2>
      </section>
      {animate &&
        places.map((place, index) => (
          <section
            key={index}
            className={`flex lg:flex-row${index % 2 === 0 ? "" : "-reverse"} flex-col-reverse justify-center items-center w-full gap-20 min-h-1 animate-show max-w-[1920px]`}
          >
            <p className="lg:w-2/5 w-5/6 font-archivo-black-regular text-center text-xl">
              {place.description}
            </p>
            <div className="h-60 w-96 bg-green shadow-2xl rounded-lg lg:border-solid lg:border-4 lg:border-text">
              <img
                src={place.image}
                className="w-full h-full object-cover lg:mt-10 lg:ml-10 animate-show rounded-lg border-solid border-4 border-text outline outline-4 outline-green bg-text"
                alt={`City ${index + 1}`}
              />
              <SVG
                type="cursor"
                className={`absolute fill-text stroke-1 stroke-green h-20 w-20 -mt-12 ${index % 2 === 0 ? "ml-20 rotate-90" : "ml-64"}`
                }
              />
            </div>
          </section>
        ))}
    </div>
  );
}

Places.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
