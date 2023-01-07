import styled from "styled-components"

const mainColor = "#236772"

const AboutUs = styled.section`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;

  h1 {
    color: ${mainColor};
    font-family: "Oswald", sans-serif;
    font-weight: 500;
    font-size: 36px;
    margin: 0 0 20px 0;
  }

  p {
    color: #0f0f0f;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 1.6;
    font-family: "Roboto", sans-serif;
  }
`

export default AboutUs