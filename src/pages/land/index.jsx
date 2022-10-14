import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  AspectRatio,
} from "@chakra-ui/react";
import { LanguageContext } from "../../provider/language";
import { useNavigate } from "react-router-dom";
import backgroundImgLand from "../../assets/imagens/pexels-max-vakhtbovych-6283961.jpg";
import { useContext } from "react";
import video01 from "../../assets/refribekFotos/v0.mp4";

export default function Land() {
  const { language, translate } = useContext(LanguageContext);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    return navigate(path);
  };

  return (
    <>
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={backgroundImgLand}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <Button
          background={"none"}
          onClick={translate}
          position={"absolute"}
          right={"10"}
          top={"10"}
          fontSize={"2rem"}
          backgroundColor={"none"}
        >
          {language ? " 🇺🇸" : " 🇧🇷"}
        </Button>
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              {language
                ? "Hello, Welcome to Refribek, visit our website."
                : "Olá, Sejam bem vindos a Refribek, acesse nosso site."}
            </Text>
            <Stack direction={"row"}>
              <Button
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
                onClick={() => handleNavigation("/home")}
              >
                {language ? "access website" : " Acessar site"}
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    </>
  );
}
