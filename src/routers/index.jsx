import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

import Home from "../pages/home";

const Routers = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};
export default Routers;
