import React from 'react'
import * as C from './styles.js'

export const HeaderBody = () => {
  return (
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

        <C.NossosProdutos>
            <C.Title>
            Conheça nossos Produtos
            </C.Title>
        </C.NossosProdutos>
        <C.SubTextContent>
            <C.SubText> 
            A SILAÇO, vem ao longo de 30 anos, reunindo parceiros visando atender especificamente a necessidade de cada cliente.
            </C.SubText>
        </C.SubTextContent>
    </C.Container>
  )

}
