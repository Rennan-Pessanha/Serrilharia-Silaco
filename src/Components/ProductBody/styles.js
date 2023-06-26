import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 3500px;
  width: 100%;
  background-color: #000000;

  @media (max-width: 768px) {
    height: 4900px;
  }
`;

export const TextWrapper = styled.div`
  margin-left: 40%;
  height: 200px;
  position: absolute;

  @media (max-width: 768px) {
    margin-left: 10%;
  }
`;

export const Title = styled.h1`
  height: 83px;
  font-family: 'Montserrat';
  font-size: 64px;
  font-weight: 800;
  width: 328px;
  color: white;

  @media (max-width: 768px) {
    font-size: 48px;
    width: auto;
  }
`;

export const ProductWrapper = styled.div`
  margin-top: 8%;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-top: 16%;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductContent = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 100%;

  ${props =>
    props.reversed &&
    css`
      flex-direction: row-reverse;
    `}

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 636px;
  height: auto;
  margin-right: 25px;
  margin-left: 141px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 20px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 34px;
  margin-right: 40px;

  @media (max-width: 768px) {
    align-items: center;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const ProductTitle = styled.h2`
  font-size: 75px;
  color: #ffffff;
  margin-bottom: 10px;

  ${props =>
    props.leftT &&
    css`
      margin-left: 55%;
    `}

  @media (max-width: 768px) {
    font-size: 48px;
    text-align: center;
    margin-left: 0;
  }
`;

export const AccessButton = styled.button`
  width: 245px;
  height: 79px;
  font-size: 36px;
  border-radius: 50px;

  ${props =>
    props.left &&
    css`
      margin-left: 90%;
    `}

  @media (max-width: 768px) {
    width: 200px;
    height: 60px;
    font-size: 24px;
    margin-left: 0;
  }
`;
