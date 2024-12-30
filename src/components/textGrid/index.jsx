import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useScrollTrigger } from "../../utils";
import { SVG } from "../svg";

export function TextGrid({ icon, title, elements }) {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useScrollTrigger(sectionRef, () => setAnimate(true));

  return (
    <div
      ref={sectionRef}
      className="m-10 flex flex-col items-center justify-center gap-20"
    >
      <section className="flex flex-row items-center gap-5">
        {icon && <SVG type={icon} className="h-10 w-10 fill-text" />}
        {title && (
          <h2 className="text-center font-kanit-thin text-3xl font-bold">
            {title}
          </h2>
        )}
      </section>

      {elements && animate && (
        <section className="grid animate-show grid-cols-1 items-center justify-center gap-10 md:grid-cols-2">
          {elements.map((element, index) => (
            <div
              key={index}
              className="flex cursor-pointer flex-row gap-5 rounded-2xl border-4 border-solid border-text bg-white px-2 py-8 shadow-xl transition-all hover:scale-110 hover:shadow-2xl"
            >
              <div className="flex h-full flex-col">
                <SVG
                  type={element.icon}
                  className="h-24 w-20 fill-white stroke-green stroke-1"
                />
              </div>
              <div className="flex h-full max-w-80 flex-col justify-center gap-5">
                <h3 className="text-start font-kanit-thin text-2xl font-bold italic">
                  {element.title}
                </h3>
                <p className="text-start font-Roboto italic">
                  {element.description}
                </p>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

TextGrid.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,

  elements: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    }).isRequired,
  ),
};
