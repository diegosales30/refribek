import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
    
  }
  :root{
    --primary: #111111;
    --secondary: #090832;
    --tertiary: #111111;
    --quaternary: #1A202C;
    --quinary: #141f27;
    --senary: #ffffff;
    
  }
  
  body{
    font-family: 'Inter', sans-serif;
    background-color: var(--quaternary);
    
    
    
    
  }

  body, input, button {
    font-family: 'Inter', sans-serif;
    
    
  }

  button {
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }
  
  `;
