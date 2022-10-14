import { Box, Text } from "@chakra-ui/react";
import React from "react";
import CardSobre from "../../components/CardSobre";
import Main from "../../components/Main";

import { useContext } from "react";
import { LanguageContext } from "./../../provider/language/index";

const Sobre = () => {
  const { language } = useContext(LanguageContext);
  return (
    <Main>
      <Box
        w={"100%"}
        maxW={"1280px"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-around"}
        marginTop={"30px"}
        gap={"30px"}
        flexWrap={{ base: "wrap", md: "nowrap" }}
        padding={"16px"}
        marginBottom={50}
      >
        <Box>
          <Box>
            <Text fontSize={"25px"} fontWeight={"bold"} textAlign={"start"}>
              {language ? "Who we are?" : "Quem Somos?"}
            </Text>
          </Box>
          <Box marginTop={"10px"}>
            <Text
              textAlign={"start"}
              fontSize={{ base: "15px", md: "15px", lg: "20px" }}
            >
              {language
                ? "History: Refribek started its activities in September 2013 by electrical technician Celso Belmiro who has been working in the profession since 1993,aiming to provide differentiated, quality and affordable services accessible."
                : "História: A Refribek iniciou suas atividades em setembro de 2013 pelo eletrotécnico Celso Belmiro que atua na profissão desde 1993,visando prestar serviços diferenciados, de qualidade e a preços acessíveis."}
            </Text>
          </Box>
          <Box marginTop={"10px"}>
            <Text
              textAlign={"start"}
              fontSize={{ base: "15px", md: "15px", lg: "20px" }}
            >
              {language
                ? "What we do? Refribek is a company specialized in the field of refrigeration and electrical solutions in Rio de Janeiro – RJ."
                : "O que fazemos? A Refribek é uma empresa especializada no ramo de soluções em refrigeração e elétrica no Rio de janeiro – RJ."}
            </Text>
          </Box>
          <Box marginTop={"10px"}>
            <Text
              textAlign={"start"}
              fontSize={{ base: "15px", md: "15px", lg: "20px" }}
            >
              {language
                ? "Our experiences? Refribek is a proven company responsible for the refrigeration and air conditioning of several 5 star hotels, condominiums, shops, residences and agencies public."
                : "Nossas experiências? A Refribek é comprovadamente uma empresa séria, responsável pela refrigeração e climatização de diversos hotéis 5 estrelas, condomínios, comércios, residências e órgãos públicos."}
            </Text>
          </Box>
        </Box>
      </Box>

      <Box
        display={"flex"}
        maxW={"1280px"}
        justifyContent={"center"}
        alignItems={"flex-end"}
        marginTop={"30px"}
        flexWrap={{ base: "wrap", md: "wrap" }}
        gap={"30px"}
        padding={"16px"}
      >
        <CardSobre
          h={"330px"}
          borderTop={"10px solid #A352F3"}
          padding={"16px"}
          display={"flex"}
          justifyContent={"space-around"}
          flexDirection={"column"}
        >
          <Text fontSize={"25px"} color={"#0E2A52"} fontWeight={"bold"}>
            {language ? "Mission" : "Missão"}
          </Text>
          <Text
            color={"black"}
            fontSize={{ base: "15px", md: "15px", lg: "18px" }}
            textAlign={"start"}
          >
            {language
              ? "Refribek's mission is to be excellence in service and provision of services, so that our customers feel valued and are satisfied with our technical team."
              : "A Refribek tem como missão ser excelência em atendimento e prestação de serviços, para que nossos clientes se sintam valorizados e tenham satisfação em contar com nosso time técnico."}
          </Text>
        </CardSobre>
        <CardSobre
          h={"360px"}
          borderTop={"10px solid #3A7FCF"}
          padding={"16px"}
          display={"flex"}
          justifyContent={"space-around"}
          flexDirection={"column"}
        >
          <Text fontSize={"25px"} color={"#0E2A52"} fontWeight={"bold"}>
            {language ? "Vision" : "Visão"}
          </Text>
          <Text
            color={"black"}
            fontSize={{ base: "15px", md: "15px", lg: "18px" }}
            textAlign={"start"}
          >
            {language
              ? "Undertake with love for what you do, so that quality and fair price be the differential in our services and make our brand as reference in quality services."
              : "Empreender com amor pelo que faz, para que a qualidade e preço justo seja o diferencial nos nossos serviços e tornar a nossa marca como referencia em serviços de qualidade."}
          </Text>
        </CardSobre>
        <CardSobre
          h={"330px"}
          borderTop={"10px solid #CF933A"}
          padding={"16px"}
          display={"flex"}
          justifyContent={"space-around"}
          flexDirection={"column"}
        >
          <Text fontSize={"25px"} color={"#0E2A52"} fontWeight={"bold"}>
            {language ? "Values" : "Valores"}
          </Text>
          <Text
            color={"black"}
            fontSize={{ base: "15px", md: "15px", lg: "18px" }}
            textAlign={"start"}
          >
            {language
              ? "Our values apply to service delivery time, quality, fair price and satisfaction guarantee to our customers."
              : "Nossos valores se aplicam a prazo de entrega do serviço, qualidade, preço justo e garantia de satisfação aos nossos clientes."}
          </Text>
        </CardSobre>
      </Box>
    </Main>
  );
};

export default Sobre;
