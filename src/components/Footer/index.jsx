import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { SiGmail, SiWhatsapp, SiFacebook } from "react-icons/si";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("#0E2A52", "#171923")}
      color={useColorModeValue("gray.300", "white")}
    >
      <Container
        as={Stack}
        maxW={"1280px"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={2}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text textAlign={"center"}>
          © 2022 Upscale Developers-ME. All rights reserved
        </Text>
        <Text fontSize={"0.8rem"} fontWeight={"bold"} textAlign={"center"}>
          CNPJ: 18.876.850/0001-13 CREA: 2011130952 CELSO BELMIRO - DIRETOR
          TÉCNICO
        </Text>
        <Stack direction={"row"} spacing={6}>
          <Link label={"Gmail"} href={"#"} target={"_black"}>
            <SiGmail
              style={{
                color: "#DB4437",
              }}
            />
          </Link>
          <Link label={"WhatsApp"} href={"#"} target={"_black"}>
            <SiWhatsapp
              style={{
                borderRadius: "100%",
                backgroundColor: "#25D366",
                color: "white",
              }}
            />
          </Link>
          <Link label={"Facebook"} href={"#"} target={"_black"}>
            <SiFacebook
              style={{
                borderRadius: "100%",
                backgroundColor: "white",
                color: "#4267B2",
              }}
            />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
