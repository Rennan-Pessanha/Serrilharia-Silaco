import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 140vh;
  background: url('./Imagem/SilasBackground.png');
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    height: 180vh;
  }
`;

export const Content = styled.div`
  height: 200px;
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

export const Logo = styled.img`
  display: inline-block;
  height: 172px;
  width: 280px;
  margin-left: 123px;
  margin-top: 12px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

export const NavContent = styled.div`
  margin-top: 75px;
  margin-left: 20%;
  display: flex;
  width: 431px;
  height: 23px;

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-left: 0;
    justify-content: center;
  }
`;

export const Navs = styled.nav`
  width: 68px;
  height: 19px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;

  flex: none;
  order: 1;
  flex-grow: 1;
`;

export const PerfilTitle = styled.div`
  width: 405px;
  height: 40px;
  margin-left: 40%;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
    margin-top: 30px;
  }
`;

export const Title = styled.h1`
  color: #FFF;
  font-size: 36px;
  font-family: Montserrat;
  font-weight: 800;
`;

export const PerfilContent = styled.div`
  margin-top: 50px;
  margin-left: 10%;
  height: 247px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Perfilh3 = styled.h3`
  color: #FFF;
  font-size: 24px;
  font-weight: 800;
  font-family: Montserrat;
  margin-bottom: 5px;
`;

export const PerfilText = styled.p`
  color: #FFF;
  font-size: 19px;
  font-family: Montserrat;
  font-weight: 700;
`;

export const CompanyContent = styled.div`
  margin-top: 170px;
  margin-left: 40%;
  height: 247px;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
    margin-top: 28%;
  }
`;

export const History = styled.div`
  height: 429px;
  flex-direction: column;
  margin-left: -50%;
  flex-shrink: 0;
`;

export const Textp = styled.p`
  color: #FFF;
  font-size: 24px;
  font-family: Montserrat;
  font-weight: 600;
`;
