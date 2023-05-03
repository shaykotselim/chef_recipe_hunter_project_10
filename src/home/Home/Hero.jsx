// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

import hero1 from '../../assets/Optimized-hero1 (1).jpg'
import hero2 from '../../assets/Optimized-hero2 (1).jpg'
import hero3 from '../../assets/Optimized-hero3 (1).jpg'
import hero4 from '../../assets/Optimized-hero4 (1).jpg'
import hero5 from '../../assets/Optimized-hero5.jpg'

// import required modules
import { Zoom, Navigation, Pagination } from "swiper";

export default function Hero() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img className="w-full h-[600px]" src={hero1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <img className="w-full h-[600px]" src={hero2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <img className="w-full h-[600px]" src={hero3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <img className="w-full h-[600px]" src={hero4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <img className="w-full h-[600px]" src={hero5} alt="" />
          </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}