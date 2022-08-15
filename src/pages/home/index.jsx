import { Box, Flex, Image, Text } from "@chakra-ui/react";

import React from "react";
import Main from "../../components/Main";
import SwiperComponent from "../../components/SwiperComponent";
import img3 from "../../../src/assets/imagens/img3.png";
const Home = () => {
  return (
    <>
      <Main>
        <SwiperComponent />
        <Flex flexDirection={"column"} gap={30} padding={10} maxW={"1280px"}>
          <Box>
            <Text fontSize={"1.5rem"} fontWeight={"bold"}>
              Nosso lema: A Refribek se responsabiliza pela execução dos
              serviços prestados, sempre pensando na segurança e satisfação do
              cliente.
            </Text>
          </Box>

          <Box
            display={"flex"}
            gap={30}
            marginBottom={4}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box w={"310px"} margin={"auto"}>
              <Image src={img3} minW={"310px"} W={"610px"} />
            </Box>
            <Box display={"flex"} gap={"30"} textAlign={"center"}>
              <Box display={"flex"} flexDirection={"column"} gap={30}>
                <Text fontSize={"1.3rem"}>
                  Serviços mais procurados? Instalação e conserto de Split’s ,
                  limpeza e conserto de ar condicionados e reparos elétricos em
                  geral.
                </Text>
                <Text fontSize={"1.3rem"}>
                  Vantagens sobre a concorrência? A Refribek é uma empresa de
                  princípios éticos e morais que ajuda no projeto e execução do
                  serviço, respeitando os interesses dos clientes para que os
                  mesmos sintam-se satisfeitos com a garantia de um excelente
                  trabalho.
                </Text>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Main>
    </>
  );
};

export default Home;
