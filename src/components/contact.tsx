import styled from "styled-components"

const mainColor = "#236772"

const Contact = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;

  h1 {
    color: ${mainColor};
    font-family: "Oswald", sans;
    font-weight: 500;
    font-size: 36px;
    margin: 0 0 20px 0;
  }

  p {
    color: #000;
    font-family: "Roboto", sans;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.6;
    margin: 5px 0;
    text-align: center;
  }

  div.contact-container {
    @media (max-width: 1100px) {
      flex-direction: column;
    }

    max-width: 1000px;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  div.contact-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 30px;
  }

  div.contact-item > img {
    @media (max-width: 720px) {
      margin-bottom: 10px;
    }

    width: 30px;
  }

  div.contact-item > p {
    font-size: 20px;
    text-align: center;
  }
`

export default Contact