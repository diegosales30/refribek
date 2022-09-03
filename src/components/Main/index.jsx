import { Box, useColorModeValue } from "@chakra-ui/react";

export default function Main({ children }) {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.800")}
      py={16}
      px={8}
      spacing={{ base: 10, md: 10 }}
      align={"center"}
      direction={"column"}
      w={[350, 400, 600, 800, 1000, 1280, 1336]}
      h={{
        base: "100%",
        sm: "100%",
        md: "100%",
        lg: "100vh",
        xl: "100vh",
        xl2: "100vh",
        xl3: "100vh",
      }}
      padding={"10px"}
      margin={"auto"}
    >
      {children}
    </Box>
  );
}
