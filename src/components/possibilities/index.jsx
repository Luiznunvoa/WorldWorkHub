import { useRef, useState } from "react";
import { useScrollTrigger } from "../../utils/scroll_trigger";
import { SVG } from "../../utils/custom_svg";
import { wfhJPG, ttwJPG } from "../../assets";

export function Possibilities() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useScrollTrigger(sectionRef, () => (setAnimate(true)));

  return (
    <div ref={sectionRef} className="w-full flex flex-col justify-center items-center m-20 gap-20"> 
  		<section className="flex flex-row  gap-5 items-center">
        <SVG type="bolt" className="fill-text h-10 w-10" />
        <h2 className="text-3xl font-bold font-kanit-thin text-center" > Infinite Possibilities</h2>
      </section>
      { animate &&
        <section className="flex lg:flex-row flex-col animate-show lg:gap-32 gap-16">
          <div className="w-96 h-[36rem] bg-green outline outline-4 outline-offset-4 outline-green rounded-xl flex flex-col items-center">
            <img src={wfhJPG} alt="Work from Home!" className="w-full h-60 bg-text rounded-xl object-cover border-solid border-4 border-text outline outline-4 outline-green" />
            <h3 className="w-9/12 font-bold font-kanit-thin text-2xl text-center text-text_secondary m-5">
              Work From Home!
            </h3>
            <p className="w-9/12 h-20 font-archivo-black-regular text-lg text-center text-text_secondary m-5">
              With WWH. you can find jobs abroad to work completely from home 
            </p>
            <button className="bg-text border-solid border-outline border-[0.1rem] text-text_secondary mt-10 w-5/6 h-16 font-kanit-thin font-bold hover:scale-105 transition duration-150 ease-in-out hover:shadow-2xl hover:outline hover:outline-8 hover:outline-text_secondary hover:outline-offset-2">See Conditions!</button>
          </div> 
          <div className="w-96 h-[36rem] bg-green outline outline-4 outline-offset-4 outline-green rounded-xl flex flex-col items-center">
            <img src={ttwJPG} alt="Travel to Work!" className="w-full h-60 bg-text rounded-xl object-cover border-solid border-4 border-text outline outline-4 outline-green" />
            <h3 className="w-9/12 font-bold font-kanit-thin text-2xl text-center text-text_secondary m-5">
              Travel to Work!
            </h3>
            <p className="w-9/12 h-20 font-archivo-black-regular text-lg text-center text-text_secondary m-5">
              We can help plan the travel to your travel dream job  
            </p>
            <button className="bg-text border-solid border-outline border-[0.1rem] text-text_secondary mt-10 w-5/6 h-16 font-kanit-thin font-bold hover:scale-105 transition duration-150 ease-in-out hover:shadow-2xl hover:outline hover:outline-8 hover:outline-text_secondary hover:outline-offset-2">See Conditions!</button>
          </div>  
        </section>
      }
  	</div>
  );
}