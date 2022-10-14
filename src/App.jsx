import { GlobalStyle } from "@chakra-ui/react";
import Land from "./pages/land";
import Routers from "./routers";

const App = () => {
  return (
    <>
      <GlobalStyle />

      <Routers />
    </>
  );
};

export default App;
