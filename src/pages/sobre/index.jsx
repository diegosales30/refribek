import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import CardSobre from "../../components/CardSobre";
import Main from "../../components/Main";
import img1 from "../../assets/imagens/img1.png";

const Sobre = () => {
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
        {/* <Box>
          <Image minW={"300px"} w={"900px"} src={img1} />
        </Box> */}
        <Box>
          <Box>
            <Text fontSize={"25px"} fontWeight={"bold"} textAlign={"start"}>
              Quem Somos?
            </Text>
          </Box>
          <Box marginTop={"10px"}>
            <Text
              textAlign={"start"}
              fontSize={{ base: "15px", md: "15px", lg: "20px" }}
            >
              História: A Refribek iniciou suas atividades em setembro de 2013
              pelo eletrotécnico Celso Belmiro que atua na profissão desde 1993,
              visando prestar serviços diferenciados, de qualidade e a preços
              acessíveis.
            </Text>
          </Box>
          <Box marginTop={"10px"}>
            <Text
              textAlign={"start"}
              fontSize={{ base: "15px", md: "15px", lg: "20px" }}
            >
              O que fazemos? A Refribek é uma empresa especializada no ramo de
              soluções em refrigeração e elétrica no Rio de janeiro – RJ.
            </Text>
          </Box>
          <Box marginTop={"10px"}>
            <Text
              textAlign={"start"}
              fontSize={{ base: "15px", md: "15px", lg: "20px" }}
            >
              Nossas experiências? A Refribek é comprovadamente uma empresa
              séria, responsável pela refrigeração e climatização de diversos
              hotéis 5 estrelas, condomínios, comércios, residências e órgãos
              públicos.
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
            Missão
          </Text>
          <Text
            color={"black"}
            fontSize={{ base: "15px", md: "15px", lg: "18px" }}
            textAlign={"start"}
          >
            A Refribek tem como missão ser excelência em atendimento e prestação
            de serviços, para que nossos clientes se sintam valorizados e tenham
            satisfação em contar com nosso time técnico.
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
            Visão
          </Text>
          <Text
            color={"black"}
            fontSize={{ base: "15px", md: "15px", lg: "18px" }}
            textAlign={"start"}
          >
            Empreender com amor pelo que faz, para que a qualidade e preço justo
            seja o diferencial nos nossos serviços e tornar a nossa marca como
            referencia em serviços de qualidade.
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
            Valores
          </Text>
          <Text
            color={"black"}
            fontSize={{ base: "15px", md: "15px", lg: "18px" }}
            textAlign={"start"}
          >
            Nossos valores se aplicam a prazo de entrega do serviço, qualidade,
            preço justo e garantia de satisfação aos nossos clientes.
          </Text>
        </CardSobre>
      </Box>
    </Main>
  );
};

export default Sobre;
