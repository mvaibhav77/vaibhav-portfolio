// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ImageCarousel = ({ project }) => {
  return (
    <Swiper
      // install Swiper modules
      className="w-full h-full"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      style={{
        color: "var(--my-color)",
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {project.images.map((image, index) => (
        <SwiperSlide key={index} className="relative w-full h-full">
          <Image src={image} layout="fill" alt={project.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
