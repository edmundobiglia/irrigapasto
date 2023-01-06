import styled from "styled-components"
import banner from "../images/banner.jpg"

const Hero = styled.section`
  @media (max-width: 420px) {
    height: 100vh;
  }
  
  max_width: 100%;
  width: 100%;
  width: 100%;
  min-height: 300px;
  height: 60vh;
  background-image: url(${banner});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 60px;

  h1 {
    @media (max-width: 720px) {
      font-size: 70px;
      letter-spacing: 0;
    }

    @media (max-width: 440px) {
      font-size: 65px;
      letter-spacing: 0;
    }

    color: #fff;
    font-family: "Oswald", sans;
    font-weight: 500;
    font-size: 86px;
    margin: 0;
    letter-spacing: 2px;  
  }

  p {
    @media (max-width: 720px) {
      font-size: 25px;
      letter-spacing: 0;
    }

    @media (max-width: 440px) {
      font-size: 23px;
      letter-spacing: 0;
      text-align: center;
    }

    color: #fff;
    font-family: "Oswald", sans;
    font-weight: 400;
    font-size: 30px;
    margin: -10px 0 0 0;
    letter-spacing: 1px; 
  }
`

export default Hero