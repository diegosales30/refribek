import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopFood from "../components/TopFooter";

import Home from "../pages/home";

const Routers = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={{ base: "100%", md: "100%", lg: "100vh" }}
      justifyContent={"space-evenly"}
      className="teste"
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <TopFood />
      <Footer />
    </Box>
  );
};
export default Routers;
