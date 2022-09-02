import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/free-mode";

// import required modules
import { Autoplay, Pagination } from "swiper";

import { dataImg } from "./data";
import { Box, Image } from "@chakra-ui/react";

import "./styles.module.css";

export default function SwiperTh() {
  return (
    <>
      <Box h={"700px"} maxW={"1280px"}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          pagination={true}
          modules={[Pagination, Autoplay]}
          centeredSlides={true}
          className="mySwiper"
        >
          {dataImg.map((item, index) => (
            <SwiperSlide key={index}>
              <Image src={item.photo} alt={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}
