import React from 'react'
import * as C from './Styles.js'
import Footer from '../../../Components/Footer/index.js'
import { Link } from 'react-router-dom';

export const PerfisEspeciais = () => {
  return (
    <div>
    <C.Container>
        <C.Content>
            <C.Logo src='./Imagem/LogoSerralheria.png' />
            <C.Content>
            <C.Logo src='./Imagem/LogoSerralheria.png' />
            <C.NavContent>

            <C.Navs>
            <Link to="/">Home</Link>
            </C.Navs>

            <C.Navs>
            <Link to="/Perfil">Empresa</Link>
            </C.Navs>

            <C.Navs>
            <Link to="/Produtos">Produtos</Link>
            </C.Navs>

            <C.Navs>
            <Link to="/FaleConosco">Contatos</Link>
            </C.Navs>
            </C.NavContent>

        </C.Content>
        </C.Content>


          <C.TitleWrapper>
            <C.Title>Título do Wrapper</C.Title>
          </C.TitleWrapper>

          <C.Wrapper>
            <C.ImageWrapper>
              <C.Image src="../Imagem/Produtos/PerfisEspeciais/Exemplo.png" />
              <C.ImageName>Perfil cartola 6,35 x 65 x 180 x 30 x 6000S</C.ImageName>
            </C.ImageWrapper>

            <C.ImageWrapper>
            <C.Image src="../Imagem/Produtos/PerfisEspeciais/Exemplo.png" />
              <C.ImageName>Perfil cartola 6,35 x 65 x 180 x 30 x 6000S</C.ImageName>
            </C.ImageWrapper>

            <C.ImageWrapper>
            <C.Image src="../Imagem/Produtos/PerfisEspeciais/Exemplo.png" />
              <C.ImageName>Perfil cartola 6,35 x 65 x 180 x 30 x 6000S</C.ImageName>
            </C.ImageWrapper>
          </C.Wrapper>

          <C.Paragraph>
            Lorem ipsum dolor sit amet consectetur. Ut viverra enim egestas blandit sodales risus libero. Elementum semper urna faucibus lobortis. Justo rhoncus blandit gravida massa. Risus donec id cursus blandit amet tempor eu. Blandit diam nunc quis urna. Blandit dui dictum augue ultricies tincidunt non ac non vulputate. Quam etiam donec ornare ut. Euismod bibendum ut morbi elementum in tempus dignissim non. Urna feugiat proin purus leo urna.
          </C.Paragraph>

          <C.Button>COMPRAR</C.Button>





    </C.Container>
    <Footer />


    </div>
  )
}

export default PerfisEspeciais
