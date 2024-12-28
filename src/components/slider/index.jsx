import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useScrollTrigger } from "../../utils/scroll_trigger";
import { SVG } from "../../utils/custom_svg";

export function Slider({icon, title, slides}) {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useScrollTrigger(sectionRef, () => setAnimate(true));
  
  return (
    <div ref={sectionRef} className="w-full flex flex-col justify-center items-center m-20 gap-20">
      <section className="flex flex-row gap-5 items-center">
        {icon && <SVG type={icon} className="fill-text h-10 w-10" />}
        {title &&
          <h2 className="text-3xl font-bold font-kanit-thin text-center">
            {title}
          </h2>
        }
      </section>
      { animate &&
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
          className="overflow-hidden rounded-lg w-full max-w-[1120px] animate-show"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="bg-white rounded-lg border-solid border-4 border-text mb-10">
              <div className="flex flex-col items-center p-5">
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="w-full h-48 bg-text shadow-lg border-solid border-4 border-text outline outline- outline-offset-0 outline-green object-cover"
                />
                <h2 className="font-bold font-kanit-thin text-2xl italic mt-4">{slide.name}</h2>
                <p className="font-Roboto text-outline text-center mt-2">{slide.description}</p>
                <button className="mt-4 px-4 py-2 text-white bg-green rounded-lg hover:bg-green transition font-Roboto">
                        View More
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      }
    </div>
  );
}

Slider.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
