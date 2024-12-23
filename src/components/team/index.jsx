import { useRef, useState } from "react";
import { man1JPG, man2JPG, man3JPG, man4JPG, woman1JPG } from "../../assets";
import { useScrollTrigger } from "../../utils/scroll_trigger";
import { SVG } from "../../utils/custom_svg";

const teamMembers = [
  {
    name: "Alex Martins",
    role: "Operations and Finance",
    image: man1JPG,
    description: "Responsible for overseeing daily operations and managing financial strategies.",
  },
  {
    name: "Luísa Alves",
    role: "Chief of Staff",
    image: woman1JPG,
    description: "Ensures smooth organizational operations and oversees key executive initiatives.",
  },
  {
    name: "Antônio Ribas",
    role: "Investments",
    image: man2JPG,
    description: "Focuses on investment strategies and portfolio management to drive growth.",
  },
  {
    name: "Marcos Totti",
    role: "Customer Relations",
    image: man3JPG,
    description: "Maintains strong client relationships and ensures exceptional customer service.",
  },
  {
    name: "Pedro Scherer",
    role: "Marketing and Sales",
    image: man4JPG,
    description: "Leads marketing campaigns and drives sales to achieve business goals.",
  },
];

export function Team() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useScrollTrigger(sectionRef, () => (setAnimate(true)));

  return (
    <div ref={sectionRef} className="w-full flex flex-col justify-center items-center m-20">
      <section className="flex flex-row  gap-5 items-center">
        <SVG type="paperpeople" className="fill-text h-10 w-10" />
        <h2 className="text-3xl font-bold font-kanit-thin text-center" >Meet Our Team</h2>
      </section>

      { animate && 
        <section className="w-9/12 grid gap-6 p-4 justify-items-center grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] sm:grid-cols-2 xl:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] animate-show max-w-[1427px]">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-60 flex flex-col items-center gap-3 m-10">
              <img src={member.image} alt={member.name} className="w-full h-60 object-cover" />
                  
              <h3 className="w-9/12 font-bold font-kanit-thin text-2xl italic text-center">
                {member.name}
              </h3>
      
              <p className="w-9/12 text-center italic font-Roboto">{member.role}</p>
      
              <p className="w-9/12 text-center italic font-Roboto text-outline">
                {member.description}
              </p>
            </div>
          ))}
        </section>}
    </div>
  );
}