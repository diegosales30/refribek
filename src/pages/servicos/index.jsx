import { Box, Flex, Image, Text } from "@chakra-ui/react";

import React from "react";

import SwiperComponent from "../../components/SwiperComponent";
import img4 from "../../../src/assets/imagens/img4.png";
import img1 from "../../../src/assets/imagens/img5.png";
import img7 from "../../../src/assets/imagens/img7.png";
import Main from "../../components/Main";
const Servicos = () => {
  return (
    <Main>
      <SwiperComponent />
      <Box maxW={"1280px"} mb={"30px"}>
        <Flex
          display={"flex"}
          flexWrap={{
            base: "wrap",
            md: "wrap",
            lg: "nowrap",
          }}
          w={"100%"}
          gap={30}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            flexWrap={{ base: "wrap", md: "wrap", lg: "nowrap" }}
            minW={"344px"}
            gap={5}
            w={"50%"}
            margin={{ base: "auto", md: "auto", lg: "initial" }}
          >
            <Box margin={"auto"} minW={"300px"} marginTop={"10px"}>
              <Image src={img1} />
            </Box>
            <Box>
              <Text fontSize={"1.2rem"} fontWeight={"bold"} textAlign={"left"}>
                •Importante frisar que todas as imagens são de direito autoral
                da Refribek, esses reparos e instalações foram executados por
                nossa equipe de profissionais.
              </Text>
            </Box>
          </Box>
          <Box margin={"auto"}>
            <Image src={img7} />
          </Box>
        </Flex>
        <Box display={"flex"} w={"100%"}>
          <Box
            display={"flex"}
            alignItems={"center"}
            margin={"auto"}
            marginTop={"20px"}
            flexWrap={{ base: "wrap", md: "wrap", lg: "nowrap" }}
            gap={10}
          >
            <Box w={"310px"} margin={"auto"} marginTop={"5px"} minW={"300px"}>
              <Image src={img4} W={"610px"} />
            </Box>
            <Box w={"310px"} margin={"auto"}>
              <Text fontSize={"1.2rem"} fontWeight={"bold"}>
                Serviços mais procurados? Instalação e conserto de Split’s ,
                limpeza e conserto de ar condicionados e reparos elétricos em
                geral.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Main>
  );
};

export default Servicos;
