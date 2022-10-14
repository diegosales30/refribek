import { Box, Container, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";
import pix from "../../assets/imagens/pix.png";

import { useContext } from "react";
import { LanguageContext } from "./../../provider/language/index";

export default function TopFood() {
  const { language } = useContext(LanguageContext);
  return (
    <Box bg={"#27282D"} color={"white"} display={{ base: "block" }}>
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
              {language ? "PAYMENT METHODS" : "FORMAS DE PAGAMENTOS"}
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
            {language ? "OPENING HOURS" : "HORÁRIO DE FUNCIONAMENTO"}
          </Text>
          <Text as={"p"} fontSize={"0.9rem"}>
            {language
              ? "Monday to Friday: 8:00 to 18:00 / Saturday: 8:00 to 14:00"
              : "Segunda a sexta: 8:00 ás 18:00 / Sábados: 8:00 ás 14:00"}
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <Text as={"p"} fontSize={"0.9rem"} fontWeight={"bold"}>
            {language
              ? "Headquarters: Rua Itambaraçá - 125 (Lot 22 - Block 85)"
              : "Matriz: Rua Itambaraçá – 125 (Lote 22 – Quadra 85)"}
          </Text>
          <Text as={"p"} fontSize={"0.9rem"}>
            {language
              ? "District: Campo Grande - CEP: 23060-070 - Rio de Janeiro/RJ"
              : "Bairro: Campo Grande – CEP:23060-070 – Rio de Janeiro/RJ"}
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
