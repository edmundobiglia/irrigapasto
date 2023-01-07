import React from "react"
import { createGlobalStyle } from "styled-components"

const mainColor = "#236772"

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  body, p {
    font-family: "Roboto", sans-serif;
  }

  * {
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (min-width: 800px) {
    a:hover {
      color: ${mainColor};
    }
  }
`

type Props = {
  children?: React.ReactNode
};

const Global: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle theme="purple" />
      {children}
    </React.Fragment>
  )
}

export default Global