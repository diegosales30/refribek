import { Box, Container, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";
import pix from "../../assets/imagens/pix.png";

export default function TopFood() {
  return (
    <Box bg={"#27282D"} color={"white"}>
      <Container
        as={Stack}
        maxW={"1280px"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={2}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Box>
          <Flex flexDirection={"column"} gap={"2"}>
            <Text as={"p"} fontSize={"0.9rem"} fontWeight={"bold"}>
              FORMAS DE PAGAMENTOS
            </Text>
            <Box display={"flex"} justifyContent={"space-around"}>
              <FaCcMastercard size={"25px"} />
              <FaCcVisa size={"25px"} />
              <Image w={"50px"} h={"20px"} src={pix} />
            </Box>
          </Flex>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <Text as={"p"} fontSize={"0.9rem"} fontWeight={"bold"}>
            HORÁRIO DE FUNCIONAMENTO
          </Text>
          <Text as={"p"} fontSize={"0.9rem"}>
            Segunda a sexta: 8:00 ás 18:00 / Sábados: 8:00 ás 14:00
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <Text as={"p"} fontSize={"0.9rem"} fontWeight={"bold"}>
            Matriz: Rua Itambaraçá – 125 (Lote 22 – Quadra 85)
          </Text>
          <Text as={"p"} fontSize={"0.9rem"}>
            Bairro: Campo Grande – CEP:23060-070 – Rio de Janeiro/RJ
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
