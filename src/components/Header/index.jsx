import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  ListItem,
  UnorderedList,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ColorModeToggle from "../nightMode";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/imagens/logo.png";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    return navigate(path);
  };

  return (
    <>
      <Box bg={useColorModeValue("#0E2A52", "#171923")}>
        <Flex
          as="nav"
          margin="0 auto"
          maxW="1280px"
          color={useColorModeValue("gray.300", "white")}
          minH={"60px"}
          h="81px"
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
            //bg={useColorModeValue("gray.100", "gray.800")}
          >
            <Image
              src={logo}
              alt="logo"
              w={{ base: "auto", md: "200px" }}
              cursor={"pointer"}
              onClick={() => handleNavigation("/home")}
              bg={"transparent"}
            />

            <Flex
              display={"flex"}
              justifyContent={"flex-end"}
              padding={{ base: "0.5rem", md: "5" }}
              w={"100%"}
            >
              <UnorderedList
                display={{ base: "none", md: "flex" }}
                ml={10}
                alignItems={"center"}
                listStyleType={"none"}
                gap={12}
              >
                <ListItem
                  onClick={() => handleNavigation("/home")}
                  cursor={"pointer"}
                  fontWeight={"bold"}
                  _hover={{ color: "#12FCEE", cursor: "pointer" }}
                  marginLeft={"10px"}
                  transition={"all 0.2s ease-in-out"}
                  outline={"none"}
                >
                  Home
                </ListItem>
                <ListItem
                  onClick={() => handleNavigation("/tecnologias")}
                  fontWeight={"bold"}
                  _hover={{ color: "#12FCEE", cursor: "pointer" }}
                  marginLeft={"10px"}
                  transition={"all 0.2s ease-in-out"}
                  outline={"none"}
                >
                  Serviços
                </ListItem>
                <ListItem
                  onClick={() => handleNavigation("/projetos")}
                  fontWeight={"bold"}
                  _hover={{ color: "#12FCEE", cursor: "pointer" }}
                  marginLeft={"10px"}
                  transition={"all 0.2s ease-in-out"}
                  outline={"none"}
                >
                  Contatos
                </ListItem>
                <ListItem
                  onClick={() => handleNavigation("/contato")}
                  fontWeight={"bold"}
                  _hover={{ color: "#12FCEE", cursor: "pointer" }}
                  marginLeft={"10px"}
                  transition={"all 0.2s ease-in-out"}
                  outline={"none"}
                  mr={"10px"}
                >
                  Sobre
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <ColorModeToggle />
          </Stack>
        </Flex>

        <Collapse
          in={isOpen}
          animateOpacity
          style={{
            zIndex: 1,
          }}
        >
          <Flex bg={useColorModeValue("white", "gray.800")}>
            <UnorderedList
              //position={"absolute"}
              padding={0}
              margin={0}
              top={61}
              bg={useColorModeValue("white", "gray.800")}
              p={5}
              display={{ md: "none" }}
              listStyleType={"none"}
            >
              <ListItem
                onClick={() => handleNavigation("/home")}
                marginTop={"0px"}
                cursor={"pointer"}
                _hover={{ color: "#e3386a" }}
              >
                Home
              </ListItem>
              <ListItem
                onClick={() => handleNavigation("/tecnologias")}
                marginTop={"10px"}
                cursor={"pointer"}
                _hover={{ color: "#e3386a" }}
              >
                Tecnologias
              </ListItem>
              <ListItem
                onClick={() => handleNavigation("/projetos")}
                marginTop={"10px"}
                cursor={"pointer"}
                _hover={{ color: "#e3386a" }}
              >
                Projetos
              </ListItem>
              <ListItem
                onClick={() => handleNavigation("/contato")}
                marginTop={"10px"}
                cursor={"pointer"}
                _hover={{ color: "#e3386a" }}
                zIndex={1}
              >
                Contato
              </ListItem>
            </UnorderedList>
          </Flex>
        </Collapse>
      </Box>
    </>
  );
}
