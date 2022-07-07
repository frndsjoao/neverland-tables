// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function FeedbackCarousel() {
  return (
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>Feedback 1</SwiperSlide>
        <SwiperSlide>Feedback 2</SwiperSlide>
        <SwiperSlide>Feedback 3</SwiperSlide>
        <SwiperSlide>Feedback 4</SwiperSlide>
        <SwiperSlide>Feedback 5</SwiperSlide>
      </Swiper>
  );
}
