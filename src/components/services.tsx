import styled from "styled-components"

const mainColor = "#236772"

const Services = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background-color: ${mainColor};

  h1 {
    color: #fff;
    font-family: "Oswald", sans;
    font-weight: 500;
    font-size: 36px;
    margin: 0 0 30px 0;
  }

  p {
    color: #fff;
    font-family: "Roboto", sans;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.3;
    margin: 10px 0;
    text-align: center;
    font-family: "Roboto", sans;
  }
`

export default Services