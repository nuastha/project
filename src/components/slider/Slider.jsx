import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import Image1 from "../../assets/Screenshot6.png";
import Image2 from "../../assets/Screenshot1.png";
import Image3 from "../../assets/Screenshot2.png";
import Image4 from "../../assets/Screenshot3.png";
import Image5 from "../../assets/Screenshot4.png";
import Image6 from "../../assets/Screenshot5.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const sliderContent = [
  { id: 1, imgUrl: Image1, alt: "Project Screenshot 1" },
  { id: 2, imgUrl: Image2, alt: "Project Screenshot 2" },
  { id: 3, imgUrl: Image3, alt: "Project Screenshot 3" },
  { id: 4, imgUrl: Image4, alt: "Project Screenshot 4" },
  { id: 5, imgUrl: Image5, alt: "Project Screenshot 5" },
  { id: 6, imgUrl: Image6, alt: "Project Screenshot 6" },
];

export default function Slider() {
  return (
    <div className="relative w-full lg:h-[calc(100vh-86px)]">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full select-none"
      >
        {sliderContent.map((content) => (
          <SwiperSlide key={content.id}>
            <img
              src={content.imgUrl}
              alt={content.alt}
              className="block size-full object-contain aspect-video lg:object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-prev absolute top-1/2 left-4 -translate-y-1/2 z-10 cursor-pointer bg-white/40 p-2 rounded-full shadow">
        <FaArrowLeft className="size-5 text-blue-700/90" />
      </div>
      <div className="custom-next absolute top-1/2 right-4 -translate-y-1/2 z-10 cursor-pointer bg-white/40 p-2 rounded-full shadow">
        <FaArrowRight className="size-5 text-blue-700/90" />
      </div>
    </div>
  );
}
