import PropTypes from 'prop-types';
import { SVG } from "../../assets";

function ProductSection({ text, icons }) {
  return (
    <section className="flex flex-row justify-center items-center h-">
      <p className="font-Roboto w-40">{text}</p>
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
        { type: "tap", className: "absolute mt-16 w-20 h-20 fill-text rotate-90" },
        { type: "usa", className: "w-40 h-40 fill-green" },
      ],
    },
    {
      text: "Search for better opportunities everywhere",
      icons: [
        { type: "graph", className: "w-40 h-36  fill-green" },
        { type: "man", className: "absolute mt-14 ml-1 w-20 h-20 fill-text" },
        { type: "suitcase", className: "absolute mt-20 mr-12 w-8 h-8 fill-text" },
      ],
    },
    {
      text: "Live for new and exciting experiences",
      icons: [
        { type: "heart", className: "w-40 h-32 mt-5 fill-green" },
        { type: "smile", className: "absolute mt-16 ml-1 w-20 h-20 fill-text" },
      ],
    },
    {
      text: "Explore paths that lead to your dreams and goals.",
      icons: [
        { type: "target", className: "w-40 h-24 mt-7 fill-green" },
        { type: "bow", className: "absolute mt-12 ml-1 w-20 h-20 fill-text" },
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
