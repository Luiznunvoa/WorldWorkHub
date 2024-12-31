import PropTypes from "prop-types";
import { SVG } from "../svg";

export const Highlight = ({ highlights }) => (
  <div className="m-5 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] items-center justify-center gap-6 p-4 sm:grid-cols-2 xl:flex xl:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] xl:flex-row">
    {highlights.map(({ text, blackIcon, greenIcon, animation = "" }, index) => (
      <section
        key={index}
        className="flex flex-row items-center justify-center gap-5"
      >
        <p className="w-40 text-center font-archivo-black-regular text-lg">
          {text}
        </p>

        <div className="relative flex flex-row">
          <SVG className="h-40 w-40 fill-green" type={greenIcon} />
          <SVG
            className={`fill-tex absolute mt-8 h-20 w-20 ${animation}`}
            type={blackIcon}
          />
        </div>
      </section>
    ))}
  </div>
);

Highlight.propTypes = {
  highlights: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      blackIcon: PropTypes.string.isRequired,
      greenIcon: PropTypes.string.isRequired,
      animation: PropTypes.string,
    }).isRequired,
  ).isRequired,
};
