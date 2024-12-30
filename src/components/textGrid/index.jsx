import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useScrollTrigger } from '../../utils';
import { SVG } from '../svg';

export function TextGrid({ icon, title, elements }) {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useScrollTrigger(sectionRef, () => setAnimate(true));

  return (
    <div ref={sectionRef} className="flex flex-col justify-center items-center m-10 gap-20"> 
      <section className="flex flex-row gap-5 items-center">
        {icon && <SVG type={icon} className="fill-text h-10 w-10" />}
        {title &&
					<h2 className="text-3xl font-bold font-kanit-thin text-center">
					  {title}
					</h2>
        }
      </section>

      { (elements && animate) &&
      	<section className="grid md:grid-cols-2 grid-cols-1 justify-center items-center animate-show gap-10">
      	  {elements.map((element, index) => (
      	    <div key={index} className="flex flex-row  bg-white border-solid border-4 border-text rounded-2xl gap-5 py-8 px-2 shadow-xl">
      	      <div className="h-full flex flex-col">
      	        <SVG type={element.icon} className="w-20 h-24 fill-white stroke-1 stroke-green" /> 
      	      </div>
      	      <div className="h-full flex flex-col  justify-center max-w-80 gap-5">
      	        <h3 className="font-bold font-kanit-thin text-2xl italic text-start">
      	          {element.title}
      	        </h3>
      	        <p className="italic font-Roboto text-start">
      	          {element.description}
      	        </p>		
      	      </div>
      	    </div>
              	))
      	  }
      	</section>
      }
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
    }).isRequired
  ),
};