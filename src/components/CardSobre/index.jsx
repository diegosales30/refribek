import { Box } from "@chakra-ui/react";
import React from "react";

const CardSobre = ({ children, ...rest }) => {
  return (
    <>
      <Box
        maxW={"310px"}
        bg={"#D9D9D9"}
        boxShadow={"0px 0px 8px #5c5c5c"}
        {...rest}
      >
        {children}
      </Box>
    </>
  );
};

export default CardSobre;
