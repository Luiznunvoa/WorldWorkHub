import { useRef, useState } from "react";
import { city1JPG, city2JPG, lorem } from "../../assets";
import { useScrollTrigger } from "../../utils/scroll_trigger";
import { SVG } from "../../utils/custom_svg";

export function Places() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useScrollTrigger(sectionRef, () => (setAnimate(true)));

  return (
    <div ref={sectionRef} className="flex flex-col items-center gap-10 m-20">
      <section className="flex flex-row  gap-5 items-center">
        <SVG type="signs" className="fill-text h-10 w-10" />
        <h2 className="text-3xl font-bold font-kanit-thin text-center" > Go Anywhere</h2>
      </section>
      { animate &&
        <>
          <section className="flex lg:flex-row flex-col-reverse justify-center items-center w-full gap-20 min-h-1 animate-show max-w-[1920px]"> 
            <p className="lg:w-2/5 w-5/6 font-Roboto text-center">{lorem}</p>
            <div className="h-60 w-96 bg-green shadow-2xl rounded-lg">
              <img src={city1JPG} className=" w-full h-full object-cover lg:mt-10 lg:ml-10 rounded-lg" alt="New York" />
              <SVG type="cursor" className="absolute fill-text stroke-1 stroke-green h-20 w-20 -mt-12 ml-20 rotate-90" />
            </div>
          </section>
          <section className="flex lg:flex-row flex-col justify-center items-center w-full gap-20 min-h-1 animate-show max-w-[1920px]"> 
            <div className="h-60 w-96 bg-green shadow-2xl rounded-lg">            
              <img src={city2JPG} className=" w-full h-full object-cover lg:mt-10 lg:ml-10 animate-show rounded-lg" alt="Berlin" />
              <SVG type="cursor" className="absolute fill-text stroke-1 stroke-green h-20 w-20 -mt-12 ml-80" />
            </div>
            <p className="lg:w-2/5 w-5/6 font-Roboto text-center">{lorem}</p>
          </section>
        </>
      }
    </div>
  );
}