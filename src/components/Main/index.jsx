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
      height={"100%"}
      padding={"0"}
    >
      {children}
    </Box>
  );
}
