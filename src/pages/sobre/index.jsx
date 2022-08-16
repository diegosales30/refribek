import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import CardSobre from "../../components/CardSobre";
import Main from "../../components/Main";
import img1 from "../../assets/imagens/img1.png";

const Sobre = () => {
  return (
    <Main style={{ Width: "100%" }} display={"flex"} flexDirection={"column"}>
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
      >
        <Box>
          <Image minW={"300px"} w={"900px"} src={img1} />
        </Box>
        <Box>
          <Box>
            <Text fontSize={"25px"} fontWeight={"bold"} textAlign={"start"}>
              Quem Somos?
            </Text>
          </Box>
          <Box marginTop={"10px"}>
            <Text textAlign={"start"}>
              História: A Refribek iniciou suas atividades em setembro de 2013
              pelo eletrotécnico Celso Belmiro que atua na profissão desde 1993,
              visando prestar serviços diferenciados, de qualidade e a preços
              acessíveis.
            </Text>
          </Box>
          <Box marginTop={"10px"}>
            <Text textAlign={"start"}>
              O que fazemos? A Refribek é uma empresa especializada no ramo de
              soluções em refrigeração e elétrica no Rio de janeiro – RJ.
            </Text>
          </Box>
          <Box marginTop={"10px"}>
            <Text textAlign={"start"}>
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
        flexWrap={{ base: "wrap", md: "nowap" }}
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
          <Text color={"black"} fontSize={"18px"} textAlign={"start"}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
            nostrum nisi quod asperiores enim ut cum aut quis doloribus iusto
            eum, aspernatur quo quidem dolor rem officiis tempora assumenda
            tempore!
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
          <Text color={"black"} fontSize={"18px"} textAlign={"start"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos sed
            delectus neque distinctio error autem libero tempore maxime
            voluptates. Delectus fugit vitae provident eligendi! Corrupti
            provident fugiat sapiente laudantium adipisci.
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
          <Text color={"black"} fontSize={"18px"} textAlign={"start"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            tempora dignissimos aperiam eligendi libero corrupti blanditiis
            natus assumenda, totam fugiat non sapiente incidunt? Voluptas veniam
            consequuntur nam est et ullam!
          </Text>
        </CardSobre>
      </Box>
    </Main>
  );
};

export default Sobre;
