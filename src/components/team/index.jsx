import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useScrollTrigger } from "../../utils/scroll_trigger";
import { SVG } from "../../utils/custom_svg";

export function Team({ teamMembers }) {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useScrollTrigger(sectionRef, () => setAnimate(true));

  return (
    <div ref={sectionRef} className="w-full flex flex-col justify-center items-center m-20">
      <section className="flex flex-row gap-5 items-center">
        <SVG type="paperpeople" className="fill-text h-10 w-10" />
        <h2 className="text-3xl font-bold font-kanit-thin text-center">Meet Our Team</h2>
      </section>

      {animate && (
        <section className="w-9/12 grid gap-6 p-4 justify-items-center grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] sm:grid-cols-2 xl:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] animate-show max-w-[1427px]">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-60 flex flex-col items-center gap-3 m-10">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-60 object-cover border-solid border-4 border-text"
              />

              <h3 className="w-9/12 font-bold font-kanit-thin text-2xl italic text-center">
                {member.name}
              </h3>

              <p className="w-9/12 text-center italic font-Roboto">
                {member.role}
              </p>

              <p className="w-9/12 text-center italic font-Roboto text-outline">
                {member.description}
              </p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

Team.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired, 
      role: PropTypes.string.isRequired, 
      image: PropTypes.string.isRequired, 
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
