import PropTypes from 'prop-types';
import { SVG } from "../../assets";

function ProductSection({ text, icons }) {
  return (
    <section className="flex flex-row justify-center items-center">
      <p className="font-Roboto w-[10rem]">{text}</p>
      <div className="flex flex-row relative">
        {icons.map((icon, index) => (
          <SVG key={index} className={icon.className} type={icon.type} />
        ))}
      </div>
    </section>
  );
}

ProductSection.propTypes = {
  text: PropTypes.string,
  icons: PropTypes.array,
};

export function Products() { // Label and icons for each section of the component
  const sections = [
    {
      text: "Choose the country where you want to work on",
      icons: [
        { type: "tap", className: "absolute mt-[4rem] w-[5rem] h-[5rem] fill-text rotate-90" },
        { type: "usa", className: "w-[10rem] h-[10rem] fill-green" },
      ],
    },
    {
      text: "Search for better opportunities everywhere",
      icons: [
        { type: "graph", className: "w-[10rem] h-[8rem]  fill-green" },
        { type: "man", className: "absolute mt-[3rem] ml-[0.25rem] w-[5rem] h-[5rem] fill-text" },
        { type: "suitcase", className: "absolute mt-[5.25rem] mr-12 w-[2rem] h-[2rem] fill-text" },
      ],
    },
    {
      text: "Live for new and exciting experiences",
      icons: [
        { type: "heart", className: "w-[10rem] h-[8rem] mt-[1.25rem] fill-green" },
        { type: "smile", className: "absolute mt-[4rem] ml-[0.25rem] w-[5rem] h-[5rem] fill-text" },
      ],
    },
    {
      text: "Explore paths that lead to your dreams and goals.",
      icons: [
        { type: "target", className: "w-[10rem] h-[6rem] mt-[1.75rem] fill-green" },
        { type: "bow", className: "absolute mt-[3rem] ml-[0.25rem] w-[5rem] h-[5rem] fill-text" },
      ],
    },
  ];

  return (
    <div className="flex lg:flex-row align-middle justify-center w-full flex-col gap-10">
      {sections.map((section, index) => (
        <ProductSection key={index} text={section.text} icons={section.icons} />
      ))}
    </div>
  );
}
