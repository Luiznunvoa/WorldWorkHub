import PropTypes from 'prop-types';
import { SVG } from "../../utils/custom_svg";

export const Highlight = ({ highlights }) => (
  <div className="grid gap-6 p-4 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] sm:grid-cols-2 xl:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] m-5 xl:flex xl:flex-row items-center justify-center">
    {highlights.map(({ text, blackIcon, greenIcon, animation = "" }, index) => (
      <section
        key={index}
        className="flex flex-row justify-center items-center gap-5"
      >
        <p className="font-archivo-black-regular text-center text-lg w-40">{text}</p>
        <div className="flex flex-row relative">
          <SVG className="w-40 h-40 fill-green" type={greenIcon} />
          <SVG className={`absolute mt-8 w-20 h-20 fill-tex ${animation}`} type={blackIcon} />
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
    }).isRequired
  ).isRequired,
};