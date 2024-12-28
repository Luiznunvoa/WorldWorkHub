import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { SVG } from "../../utils/custom_svg";

export function Possibilities() {
  const profiles = [
    {
      name: "Alanna Dell",
      description: "She likes pancakes served with maple syrup, fresh fruit, or whipped cream",
      image: "https://i.postimg.cc/KYPG5YD5/profile1.jpg",
    },
    {
      name: "Alan Doe",
      description: "She likes layers of yogurt, granola, and fresh berries",
      image: "https://i.postimg.cc/mg0qgNMd/profile2.jpg",
    },
    {
      name: "Jordan Lee",
      description: "He likes a thick smoothie topped with granola, seeds, and fresh fruit",
      image: "https://i.postimg.cc/rsnZXSMN/profile3.jpg",
    },
    {
      name: "Adam Murphy",
      description: "He likes scrambled eggs, crispy bacon, and toast",
      image: "https://i.postimg.cc/wv9w1WBk/profile4.jpg",
    },
    {
      name: "Billy Henry",
      description: "He likes tortilla filled with scrambled eggs, cheese, beans, and salsa",
      image: "https://i.postimg.cc/bYtT9DGn/profile5.jpg",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center m-20 gap-20">
      <section className="flex flex-row gap-5 items-center">
        <SVG type="bolt" className="fill-text h-10 w-10" />
        <h2 className="text-3xl font-bold font-kanit-thin text-center">Infinite Possibilities</h2>
      </section>
      <section className="w-full max-w-[1120px]">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          className="overflow-hidden rounded-lg"
        >
          {profiles.map((profile, index) => (
            <SwiperSlide key={index} className="bg-white rounded-lg border-solid border-4 border-text">
              <div className="flex flex-col items-center p-5">
                <div className="relative w-full h-32 bg-white shadow-lg border-4 border-green">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-lg font-semibold mt-4">{profile.name}</h2>
                <p className="text-gray-500 text-center mt-2">{profile.description}</p>
                <button className="mt-4 px-4 py-2 text-white bg-green rounded-lg hover:bg-green transition">
                  View More
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
