import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { SVG } from "../svg";

/**
 * Slider Component
 * A responsive slider displaying a series of slides with optional images, titles, descriptions, and buttons.
 *
 * Props:
 * - icon (string, optional): Type of SVG icon to display alongside the title.
 * - title (string, optional): The main title of the slider.
 * - slides (array): An array of objects containing:
 *   - image (string, optional): URL of the image to display on the slide.
 *   - title (string, optional): Title of the slide.
 *   - description (string, optional): Text description of the slide.
 *   - button (object, optional): Object with label and function for a button.
 */
export function Slider({ icon, title, slides }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-20">
      <section className="flex flex-row items-center gap-5">
        {icon && <SVG type={icon} className="h-10 w-10 fill-text" />}
        {title && (
          <h2 className="text-center font-kanit-thin text-3xl font-bold">
            {title}
          </h2>
        )}
      </section>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          600: { slidesPerView: 1 },
          800: { slidesPerView: 2 },
        }}
        className="w-full max-w-[1120px] overflow-hidden rounded-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="mb-10 rounded-lg border-4 border-solid border-text bg-white shadow-xl"
          >
            <div className="flex flex-col items-center p-5">
              {slide.image && (
                <img
                  src={slide.image}
                  alt={slide.image}
                  className="outline- h-48 w-full border-4 border-solid border-text bg-text object-cover shadow-lg outline outline-offset-0 outline-green"
                  loading="lazy"
                />
              )}

              {slide.title && (
                <h2 className="mt-4 font-kanit-thin text-2xl font-bold italic">
                  {slide.title}
                </h2>
              )}

              {slide.description && (
                <p className="mt-2 text-center font-Roboto text-outline">
                  {slide.description}
                </p>
              )}
              {slide.button && (
                <button
                  onClick={() => slide.button.func()}
                  className="mt-4 rounded-lg bg-green px-4 py-2 font-Roboto text-white transition hover:bg-green"
                >
                  {slide.button.label}
                </button>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

Slider.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,

      button: PropTypes.shape({
        label: PropTypes.string.isRequired,
        func: PropTypes.func.isRequired,
      }),
    }).isRequired,
  ).isRequired,
};
