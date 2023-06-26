import React from 'react'
import * as C from './styles.js'

export const ProductBody = () => {
  return (
    <>
    <C.Container>
      
    <C.TextWrapper>
      <C.Title>Produtos</C.Title>
    </C.TextWrapper>

    <C.ProductWrapper>
          <C.ProductContent>
            <C.ProductImage src="./Imagem/Produtos-Homepage/PerfisEspeciais.png" alt="Produto" />
            <C.ProductInfo>
              <C.ProductTitle>Perfis Especiais</C.ProductTitle>
              <p>Descrição do Produto</p>
              <C.AccessButton>Acessar</C.AccessButton>
            </C.ProductInfo>
          </C.ProductContent>

          <C.ProductContent reversed>
            <C.ProductImage src="./Imagem/Produtos-Homepage/PerfisEspeciais.png" alt="Outro Produto" />
            <C.ProductInfo>
              <C.ProductTitle leftT>Outro Produto</C.ProductTitle>
              <p>Outra descrição do produto</p>
              <C.AccessButton left>Acessar</C.AccessButton>
            </C.ProductInfo>
          </C.ProductContent>

          <C.ProductContent>
            <C.ProductImage src="./Imagem/Produtos-Homepage/PerfisEspeciais.png" alt="Produto" />
            <C.ProductInfo>
              <C.ProductTitle>Perfis Especiais</C.ProductTitle>
              <p>Descrição do Produto</p>
              <C.AccessButton>Acessar</C.AccessButton>
            </C.ProductInfo>
          </C.ProductContent>

          <C.ProductContent reversed>
            <C.ProductImage src="./Imagem/Produtos-Homepage/PerfisEspeciais.png" alt="Outro Produto" />
            <C.ProductInfo>
              <C.ProductTitle leftT>Outro Produto</C.ProductTitle>
              <p>Outra descrição do produto</p>
              <C.AccessButton left>Acessar</C.AccessButton>
            </C.ProductInfo>
          </C.ProductContent>

          <C.ProductContent>
            <C.ProductImage src="./Imagem/Produtos-Homepage/PerfisEspeciais.png" alt="Produto" />
            <C.ProductInfo>
              <C.ProductTitle>Perfis Especiais</C.ProductTitle>
              <p>Descrição do Produto</p>
              <C.AccessButton>Acessar</C.AccessButton>
            </C.ProductInfo>
          </C.ProductContent>

          <C.ProductContent reversed>
            <C.ProductImage src="./Imagem/Produtos-Homepage/PerfisEspeciais.png" alt="Outro Produto" />
            <C.ProductInfo>
              <C.ProductTitle leftT>Outro Produto</C.ProductTitle>
              <p>Outra descrição do produto</p>
              <C.AccessButton left>Acessar</C.AccessButton>
            </C.ProductInfo>
          </C.ProductContent>

          {/* Adicione outras variações de ProductContent conforme necessário */}

        </C.ProductWrapper>

    

    </C.Container>
    
    </>
  )
}

export default ProductBody
