import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

// Components
import Global from "../components/global"
import Hero from "../components/hero"
import AboutUs from "../components/about-us"
import Services from "../components/services"
import Contact from "../components/contact"
import Footer from "../components/footer"

// Images
import whatsappIcon from "../images/whatsapp.png"
import facebookIcon from "../images/facebook.png"
import instagramIcon from "../images/instagram.png"
import emailIcon from "../images/email.png"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Global>
      <Hero>
        <h1>IRRIGAPASTO</h1>
        <p>SOLUÇÕES EM SISTEMAS DE IRRIGAÇÃO</p>
      </Hero>
      <AboutUs>
        <h1>QUEM SOMOS</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illum, similique odit doloribus perferendis, facilis commodi aperiam dolorum placeat recusandae ut velit numquam quis officiis unde sunt inventore earum quod.</p>
      </AboutUs>

      <Services>
        <h1>SERVIÇOS</h1>

        <p>Projetos Agropecuários</p>
        <p>Sistemas de Irrigação</p>
        <p>Sistemas Rotacionados de Pastagens</p>
        <p>Manejo de Pasto</p>
      </Services>

      <Contact>
        <h1>CONTATO</h1>

        <p>Para consultas e orçamentos, fale&nbsp;conosco.</p>

        <div className="contact-container">
          <div className="contact-item">
            <img src={whatsappIcon} />
            <p><a href="https://wa.me/55159991530091">(15) 999153-0091</a></p>
          </div>
          <div className="contact-item">
            <img src={instagramIcon} />
            <p><a href="https://www.instagram.com/irrigapasto">@irrigapasto</a></p>
          </div>
          <div className="contact-item">
            <img src={emailIcon} />
            <p>irrigapasto@gmail.com</p>
          </div>
        </div>

      </Contact>

      <Footer>
        <p>© IrrigaPasto 2022. Todos os direitos reservados.</p>
      </Footer>
    </Global>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>IRRIGAPASTO - Soluções em Sistemas de Irrigação</title>