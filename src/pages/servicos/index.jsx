import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import React from "react";

import img4 from "../../../src/assets/imagens/img4.png";
import img1 from "../../../src/assets/imagens/img5.png";

import Main from "../../components/Main";
import SwiperTh from "../../components/SwiperTh";

import { useContext } from "react";
import { LanguageContext } from "./../../provider/language/index";

const Servicos = () => {
  const { language } = useContext(LanguageContext);
  return (
    <Main>
      <Heading as={"h2"}>{language ? "Gallery" : "Galeria"}</Heading>

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
            justifyContent={"space-around"}
            flexWrap={{ base: "wrap", md: "wrap", lg: "nowrap" }}
            gap={5}
            w={"100%"}
            margin={{ base: "auto", md: "auto", lg: "initial" }}
          >
            <Box
              w={"50%"}
              maxW={"550px"}
              margin={"auto"}
              marginTop={"5px"}
              minW={"300px"}
            >
              <Image
                src={img1}
                W={"610px"}
                borderRadius={"20px 0px  20px 0px"}
              />
            </Box>
            <Box w={"50%"} maxW={"550px"}>
              <Text
                fontSize={{ base: "15px", md: "15px", lg: "15px" }}
                fontWeight={"bold"}
                textAlign={"left"}
              >
                {language
                  ? "It is important to note that all images are copyrighted by Refribek, these repairs and installations were performed by our team of professionals."
                  : "Importante frisar que todas as imagens são de direito autoral da Refribek, esses reparos e instalações foram executados por nossa equipe de profissionais."}
              </Text>
            </Box>
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
            <Box w={"50%"} margin={"auto"} maxW={"550px"}>
              <Text
                fontSize={{ base: "15px", md: "15px", lg: "15px" }}
                fontWeight={"bold"}
              >
                {language
                  ? "Most wanted services? Installation and repair of Split's, cleaning and repair of air conditioners and electrical repairs in general."
                  : "Serviços mais procurados? Instalação e conserto de Split’s ,limpeza e conserto de ar condicionados e reparos elétricos em geral."}
              </Text>
            </Box>
            <Box
              w={"50%"}
              maxW={"550px"}
              margin={"auto"}
              marginTop={"5px"}
              minW={"300px"}
            >
              <Image
                src={img4}
                W={"610px"}
                borderRadius={"20px 0px  20px 0px"}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Main>
  );
};

export default Servicos;
