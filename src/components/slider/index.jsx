import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { SVG } from "../svg";

/**
 * Slider Component
 * A responsive slider displaying a series of slides with optional images, titles, descriptions, and buttons.
 *
 * Props:
 * - slider (object):
 *  - icon (string, optional): Type of SVG icon to display alongside the title.
 *  - title (string, optional): The main title of the slider.
 *  - slides (array): An array of objects containing:
 *    - image (string, optional): URL of the image to display on the slide.
 *    - title (string, optional): Title of the slide.
 *    - description (string, optional): Text description of the slide.
 *    - button (object, optional): Object with label and function for a button.
 */
export function Slider({ slider }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-20 justify-center items-center w-full">
      <section className="flex flex-row gap-5 items-center">
        {slider.icon && (
          <SVG type={slider.icon} className="w-10 h-10 fill-text" />
        )}
        {slider.title && (
          <h2 className="text-3xl font-bold text-center font-kanit-thin">
            {slider.title}
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
        className="block overflow-hidden relative mx-auto w-full rounded-lg max-w-[1120px]"
      >
        {slider.slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="relative flex-shrink-0 mb-10 w-full bg-white rounded-lg border-4 border-solid shadow-xl border-text"
          >
            <div className="flex flex-col items-center p-5">
              {slide.image && (
                <img
                  src={slide.image}
                  alt={slide.image}
                  className="object-cover w-full h-48 border-4 border-solid shadow-lg outline- border-text bg-text outline outline-offset-0 outline-green"
                  loading="lazy"
                />
              )}

              {slide.title && (
                <h2 className="mt-4 text-2xl italic font-bold font-kanit-thin">
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
                  onClick={() => navigate(slide.button.path)}
                  className="py-2 px-4 mt-4 text-white rounded-lg transition bg-green font-Roboto hover:bg-green"
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
  slider: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    slides: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,

        button: PropTypes.shape({
          label: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
        }),
      }).isRequired,
    ).isRequired,
  }),
};
