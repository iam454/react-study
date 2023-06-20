import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

// 테마
// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;
// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "#BF4F74",
  },
};
// Define what props.theme will look like
const theme = {
  main: "mediumseagreen",
};

// 글로벌 스타일
const GlobalStyle = createGlobalStyle`
  button {
    background-color: pink
  }
`;

export default function StyledComponentExample() {
  return (
    <div>
      <GlobalStyle />
      <Button>Normal</Button>
      <ThemeProvider theme={theme}>
        <Button>Themed</Button>
      </ThemeProvider>
    </div>
  );
}
