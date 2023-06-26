import React from 'react'
import * as C from './styles.js'

export const Perfil = () => {
  return (
    <>
      <C.Container>
      <C.Content>
            <C.Logo src='./Imagem/LogoSerralheria.png' />
            <C.NavContent>

                <C.Navs>
                    Home
                </C.Navs>

                <C.Navs>
                    Empresa
                </C.Navs>

                <C.Navs>
                    Produtos
                </C.Navs>

                <C.Navs>
                    Contatos
                </C.Navs>
            </C.NavContent>
        </C.Content>

        <C.PerfilTitle>
            <C.Title> PERFIL DA EMPRESA  </C.Title>
        </C.PerfilTitle>
        <C.PerfilContent>
        <C.Perfilh3>Missão:</C.Perfilh3>
            <C.PerfilText>
              Fornecer, com confiança absoluta, produtos para estruturas metálicas que atendam às necessidades de nossos clientes com comprometimento, rentabilidade, desenvolvimento dos nossos colaboradores e responsabilidade social.
            </C.PerfilText>

            <C.Perfilh3>Visão:</C.Perfilh3>
            <C.PerfilText>
              Estar entre os maiores representantes de produtos para estrutura metálica do Brasil. Manter-se como referência nacional em credibilidade, confiança e reconhecimento pela excelência na distribuição de nossos produtos e serviços.
            </C.PerfilText>

            <C.Perfilh3>Valores:</C.Perfilh3>
            <C.PerfilText>
              Inspirados em alcançar o nosso melhor, buscamos nos lapidar a cada dia e, isso faz com que cada vez mais novos clientes sejam conquistados. Trabalhamos de forma transparente e desenvolvemos um trabalho focado em oferecer sempre a melhor solução.
            </C.PerfilText>
        </C.PerfilContent>

        <C.CompanyContent>
          <C.Title> NOSSA HISTÓRIA </C.Title>
          <C.History>
              <C.Textp>
              Desde o início de nossas atividades em 1993, a Silaços tem se dedicado a oferecer uma linha completa de produtos de alta qualidade para atender às necessidades da indústria de estruturas metálicas. Trabalhamos incansavelmente para encontrar os melhores fabricantes e distribuidores de aço do mercado, oferecendo uma linha de produtos destinada a uma ampla gama de setores, desde a construção civil até a indústria em geral. <br /> Nosso compromisso com nossos clientes não termina com a venda do produto. Nossa equipe de especialistas está sempre à disposição para oferecer suporte técnico e orientação, garantindo que nossos clientes façam as escolhas certas para seus projetos. Além disso, temos uma abordagem proativa em relação ao atendimento ao cliente, oferecendo agilidade na entrega e distribuição de peças sob medida e garantindo um relacionamento de confiança absoluta com o mercado. <br /> Nossa principal missão é superar as mais altas expectativas e fazer a diferença no dia a dia de nossos clientes. Sabemos que o atendimento ao cliente é a base do nosso sucesso e é por isso que nos esforçamos para garantir que nossos clientes recebam o melhor atendimento possível em todos os momentos. Esperamos que nossos produtos e serviços continuem a fazer a diferença para nossos clientes, e estamos comprometidos em manter nossa posição como líderes em distribuição de produtos para estrutura metálica no Brasil.
              </C.Textp>
          </C.History>

        </C.CompanyContent>

      </C.Container>
    
    </>
  )
}

export default Perfil
