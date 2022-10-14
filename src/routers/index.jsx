import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopFood from "../components/TopFooter";
import Contato from "../pages/contato";

import Home from "../pages/home";
import Land from "../pages/land";
import Servicos from "../pages/servicos";
import Sobre from "../pages/sobre";

const Routers = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={{ base: "100%", md: "100%", lg: "100%" }}
      justifyContent={"space-evenly"}
    >
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />

        <Route path="/contato" element={<Contato />} />

        <Route path="/servicos" element={<Servicos />} />
      </Routes>
    </Box>
  );
};
export default Routers;
