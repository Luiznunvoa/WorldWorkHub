import { useRef, useState } from "react";
import { city1JPG, city2JPG, lorem } from "../../assets";
import { useScrollTrigger } from "../../utils/scroll_trigger";

export function Places() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useScrollTrigger(sectionRef, () => (setAnimate(true)));

  return (
    <div ref={sectionRef} className="flex flex-col items-center w-full gap-10 m-12">
      <h2 className="text-3xl font-bold font-kanit-thin text-center">Go Anywhere</h2>
      { animate &&
        <>
          <section className="flex lg:flex-row flex-col-reverse justify-center items-center w-full gap-20 min-h-1 animate-show max-w-[1920px]"> 
            <p className="lg:w-2/5 w-5/6 font-Roboto text-center"> 
              {lorem}
            </p>
            <div className="h-60 w-96 bg-green shadow-2xl rounded-lg">
              <img src={city1JPG} className=" w-full h-full object-cover lg:mt-10 lg:ml-10 rounded-lg" alt="New York"/>
            </div>
          </section>
          <section className="flex lg:flex-row flex-col justify-center items-center w-full gap-20 min-h-1 animate-show max-w-[1920px]"> 
            <div className="h-60 w-96 bg-green shadow-2xl rounded-lg">            
              <img src={city2JPG} className=" w-full h-full object-cover lg:mt-10 lg:ml-10 animate-show rounded-lg" alt="Berlin"/>
            </div>
            <p className="lg:w-2/5 w-5/6 font-Roboto text-center"> 
              {lorem}
            </p>
          </section>
        </>
      }
    </div>
  );
}