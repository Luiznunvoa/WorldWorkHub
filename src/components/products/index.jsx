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
        { type: "usa", className: "w-40 h-40 fill-green" },
        { type: "tap", className: "absolute mt-12 w-20 h-20 fill-text animate-float" },
      ],
    },
    {
      text: "Search for better opportunities everywhere",
      icons: [
        { type: "graph", className: "w-40 h-36 fill-green" },
        { type: "man", className: "absolute mt-6 w-20 h-20 fill-text animate-climb" },
      ],
    },
    {
      text: "Live for new and exciting experiences",
      icons: [
        { type: "heart", className: "w-40 h-32 mt-5 fill-green" },
        { type: "smile", className: "absolute mt-12 w-20 h-20 fill-text animate-updown" },
      ],
    },
    {
      text: "Explore paths that lead to your dreams and goals.",
      icons: [
        { type: "target", className: "w-40 h-24 mt-5 fill-green" },
        { type: "bow", className: "absolute mt-8 w-20 h-20 fill-text animate-lefright" },
      ],
    },
  ];

  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-6 p-4 sm:flex-row">
      {sections.map((section, index) => (
        <ProductSection key={index} text={section.text} icons={section.icons} />
      ))}
    </div>
  );
}
