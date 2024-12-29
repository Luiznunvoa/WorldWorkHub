import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useScrollTrigger } from "../../utils/scroll_trigger";
import { SVG } from "../../utils/custom_svg";

export function VisualGrid({ icon, title, elements }) {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useScrollTrigger(sectionRef, () => setAnimate(true));

  return (
    <div ref={sectionRef} className="w-full flex flex-col justify-center items-center m-10">
      <section className="flex flex-row gap-5 items-center">
        { icon && <SVG type={ icon } className="fill-text h-10 w-10" /> }
        { title &&
          <h2 className="text-3xl font-bold font-kanit-thin text-center">
            { title }
          </h2>
        }
      </section>

      {animate && (
        <section className="w-9/12 grid gap-6 p-4 justify-items-center grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] sm:grid-cols-2 xl:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] animate-show max-w-[1427px]">
          {elements.map((element, index) => (
            <div key={index} className="w-60 flex flex-col items-center gap-3 m-10">

              { element.image &&
                <img
                  src={element.image}
                  alt={element.image}
                  className="w-full h-60 object-cover border-solid border-4 border-text"
                  loading="lazy"
                />
              }

              { element.title &&
                <h3 className="w-9/12 font-bold font-kanit-thin text-2xl italic text-center">
                  {element.title}
                </h3>
              }

              { element.subtitle &&
                <p className="w-9/12 text-center italic font-Roboto">
                  {element.subtitle}
                </p>
              }

              { element.description &&
                <p className="w-9/12 text-center italic font-Roboto text-outline">
                  {element.description}
                </p>
              }
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

VisualGrid.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string, 
      title: PropTypes.string,
      subtitle: PropTypes.string, 
      description: PropTypes.string,
    }).isRequired
  ).isRequired,
};
