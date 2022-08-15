import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";

import Home from "../pages/home";

const Routers = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};
export default Routers;
