import styled from "styled-components"

const mainColor = "#236772"

const Footer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  background-color: ${mainColor};

  p {
    color: #fff;
    font-family: "Roboto", sans;
    font-weight: 400;
    font-size: 16px;
    margin: 0;
    padding: 0;
    text-align: center;
  }
`

export default Footer