import { useRef, useState } from "react";
import { useScrollTrigger } from "../../utils/scroll_trigger";
import { cityJPG, lorem } from "../../assets";

export function About() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useScrollTrigger(
    sectionRef,
    () => {
      if (!hasAnimated) {
        setHasAnimated(true);
      }
    }
  );

  return (
    <div ref={sectionRef} className="flex lg:flex-row flex-col-reverse justify-center items-center w-full gap-20 min-h-1 m-12">

      <p className="lg:w-1/2 w-5/6 font-Roboto text-center"> 
        {lorem}
      </p>
      { hasAnimated &&
        <div className="h-60 w-96 bg-green"> 
          <img src={cityJPG} className=" w-full h-full object-cover lg:mt-10 lg:ml-10 animate-show"/>
        </div>
      }
    </div>
  );
}