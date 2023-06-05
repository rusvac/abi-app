import React from "react";
import { Global, css } from "@emotion/react";

const fonts = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
`;

const GlobalStyle = ({ children }) => (
  <>
    <Global
      styles={css`
        ${fonts}
        html {
          scoll-behavior: smooth;
          cursor: default;
        }
        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          overflow-x: hidden;
        }
      `}
    />
    {children}
  </>
);

export default GlobalStyle;
