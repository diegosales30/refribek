import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules

import { Navigation, Pagination, Autoplay } from "swiper";

import { dataImg } from "./data";

import { Box, Image } from "@chakra-ui/react";

export default function SwiperTh() {
  console.log(dataImg);
  return (
    <Box maxWidth={"1280px"}>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        Pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        Autoplay={true}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        style={{
          height: "42.75rem",
          alignSelf: "start",
          margin: " 0 auto",

          maxWidth: "1280px",
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {dataImg?.map((item, index) => (
          <SwiperSlide
            style={{
              border: "4px solid white",
            }}
            key={index}
          >
            <Image src={item.photo} alt={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
