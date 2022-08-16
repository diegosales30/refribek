import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

import img1 from "../../assets/imagens/img1.png";
import img2 from "../../assets/imagens/img2.png";
import img3 from "../../assets/imagens/img3.png";
import img4 from "../../assets/imagens/img4.png";
import img5 from "../../assets/imagens/img5.png";
import img6 from "../../assets/imagens/img6.png";
import { Box, Image } from "@chakra-ui/react";

const Data = [img1, img2, img3, img4, img5, img6];

export default function SwiperComponent() {
  return (
    <>
      <Box h={"300px"} maxW={"1280px"}>
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
              <Image src={item} alt={item} fit={"cover"} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}
