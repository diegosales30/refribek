import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

import img1 from "../../assets/imagens/carrosel01.jpeg";
import img2 from "../../assets/imagens/carrosel02.jpeg";
import img3 from "../../assets/imagens/carrosel03.jpg";
import img4 from "../../assets/imagens/carrosel04.jpg";
import img5 from "../../assets/imagens/carrosel05.jpeg";
import img6 from "../../assets/imagens/carrosel06.jpeg";
import img9 from "../../assets/imagens/carrosel09.jpeg";
import img10 from "../../assets/imagens/carrosel10.jpeg";
import img11 from "../../assets/imagens/carrosel11.jpeg";

import { Box, Image } from "@chakra-ui/react";

const Data = [img1, img2, img3, img4, img5, img6, img9, img10, img11];

export default function SwiperComponent() {
  return (
    <>
      <Box h={"400px"} maxW={"1280px"}>
        <Swiper
          pagination={true}
          modules={[Pagination, Autoplay]}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {Data.map((item, index) => (
            <SwiperSlide key={index}>
              <Image objectFit="cover" src={item} alt={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}
