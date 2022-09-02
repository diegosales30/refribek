import { Box, Flex, Image, Text } from "@chakra-ui/react";

import React from "react";

import img4 from "../../../src/assets/imagens/img4.png";
import img1 from "../../../src/assets/imagens/img5.png";
import img7 from "../../../src/assets/imagens/img7.png";
import Main from "../../components/Main";
import SwiperTh from "../../components/SwiperTh";

const Servicos = () => {
  return (
    <Main>
      <SwiperTh />

      <Box maxW={"1280px"} mb={"30px"} mt={10}>
        <Flex
          display={"flex"}
          flexWrap={{
            base: "wrap",
            md: "wrap",
            lg: "nowrap",
          }}
          w={"100%"}
          gap={20}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            flexWrap={{ base: "wrap", md: "wrap", lg: "nowrap" }}
            gap={5}
            w={[300, 400, 500, 600, 700, 800]}
            margin={{ base: "auto", md: "auto", lg: "initial" }}
          >
            <Box w={"310px"} margin={"auto"} marginTop={"5px"} minW={"300px"}>
              <Image src={img1} W={"610px"} />
            </Box>
            <Box>
              <Text
                fontSize={{ base: "15px", md: "15px", lg: "15px" }}
                fontWeight={"bold"}
                textAlign={"left"}
              >
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
              <Text
                fontSize={{ base: "15px", md: "15px", lg: "15px" }}
                fontWeight={"bold"}
              >
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
