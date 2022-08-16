import { Box, useColorModeValue } from "@chakra-ui/react";

export default function Main({ children }) {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.800")}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}

      h={"100%"}
      padding={"0"}

      margin={{ base: "initial", md: "initial", lg: "auto" }}
    >
      {children}
    </Box>
  );
}
