import { Box, Flex, Image, Text } from "@chakra-ui/react";

import React from "react";
import Main from "../../components/Main";
import SwiperComponent from "../../components/SwiperComponent";
import img3 from "../../../src/assets/imagens/motor.jpeg";
import { useContext } from "react";
import { LanguageContext } from "./../../provider/language/index";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TopFood from "../../components/TopFooter";

const Home = () => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <Header />
      <Main>
        <SwiperComponent />

        <Flex flexDirection={"column"} gap={30} padding={10}>
          <Box>
            <Text
              fontSize={{ base: "15px", md: "15px", lg: "20px" }}
              fontWeight={"bold"}
            >
              {language
                ? "Our motto: Refribek is responsible for the execution of the services provided, always thinking about the safety and satisfaction of the client."
                : "Nosso lema: A Refribek se responsabiliza pela execução dos serviços prestados, sempre pensando na segurança e satisfação do cliente."}
            </Text>
          </Box>

          <Box
            display={"flex"}
            gap={30}
            marginBottom={4}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box margin={"auto"}>
              <Image
                src={img3}
                W={"610px"}
                borderRadius={"0px 20px  0px 20px"}
              />
            </Box>
            <Box display={"flex"} gap={"30"} textAlign={"center"}>
              <Box display={"flex"} flexDirection={"column"} gap={30}>
                <Text fontSize={{ base: "15px", md: "15px", lg: "20px" }}>
                  {language
                    ? "Most wanted services? Installation and repair of Split's, cleaning and repair of air conditioners and electrical repairs in general."
                    : "Serviços mais procurados? Instalação e conserto de Split’s ,limpeza e conserto de ar condicionados e reparos elétricos em geral."}
                </Text>
                <Text fontSize={{ base: "15px", md: "15px", lg: "20px" }}>
                  {language
                    ? "Advantages over the competition? Refribek is a company of ethical and moral principles that help in the design and execution of the service, so that costumers feel pleased with the guarantee of an excellent job."
                    : "Vantagens sobre a concorrência? A Refribek é uma empresa de princípios éticos e morais que ajuda no projeto e execução do serviço, respeitando os interesses dos clientes para que os mesmos sintam-se satisfeitos com a garantia de um excelente trabalho."}
                </Text>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Main>

      <TopFood />
      <Footer />
    </>
  );
};

export default Home;
