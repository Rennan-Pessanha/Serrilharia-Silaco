import { styled } from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 150vh;
  background: url('./Imagem/SilasBackground.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding-right: 20px;
  padding-left: 20px;

  @media (max-width: 1650px) {
    height: 200vh;
    padding-right: 20px;
    padding-left: 20px;
  }

  @media (max-width: 1440px) {
    height: 180vh;
    padding-right: 20px;
    padding-left: 20px;
  }

  @media (max-width: 1069px) {
    height: 250vh;
    padding-right: 20px;
    padding-left: 20px;
  }


  @media (max-width: 1024px) {
    height: 260vh;
    padding-right: 20px;
    padding-left: 20px;
  }

  @media (max-width: 768px) {
    height: 240vh;
    padding-right: 20px;
    padding-left: 20px;
  }

  @media (max-width: 612px) {
    height: 300vh;
  }

  @media (max-width: 480px) {
    height: 550vh;
    padding-right: 20px;
    padding-left: 20px;
  }

  @media (max-width: 750px) {
    @media (max-width: 480px) {
      height: 590vh;
      padding-right: 20px;
      padding-left: 20px;
    }
  }

  @media (max-width: 320px) {
    @media (max-width: 480px) {
      height: 590vh;
      padding-right: 20px;
      padding-left: 20px;
    }
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

  @media (max-width: 425px) {
    margin-left: 0%;
  }

  @media (max-width: 320px) {
    margin-left: 50%;

    flex-direction: column;
    display: flex;
    width: 431px;
    margin-top: 0px;
    margin-bottom: 90px;
  }
`;

export const Navs = styled(Link)`
  width: 68px;
  height: 19px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  line-height: 24px;
  color: #ffffff;

  flex: none;
  order: 1;
  flex-grow: 1;

  &:hover {
    transform: scale(1.2); 
  }

  @media (max-width: 375px) {
    font-size: 15px;
    margin-right: 2px;
    flex-direction: column;
  }

  @media (max-width: 320px) {
    margin-top: 20px;
    margin-left: 23%;
    margin-bottom:
  }
`;

export const PerfilTitle = styled.div`
  width: 405px;
  height: 40px;
  margin-left: 40%;

  @media (max-width: 768px) {
    margin-left: 0px;
    text-align: center;
    margin-top: 30px;
  }

  @media (max-width: 320px) {
    margin-top: 30%;
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
    margin-left: 2;
  }

  @media (max-width: 375px) {
    margin-top: 0%;
    margin-bottom: 10%
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
  margin-bottom: 10%;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
    margin-top: 28%;
    margin-bottom: 5%;
  }

  @media (max-width: 612px) {
    margin-top: 48%;
  }


  @media (max-width: 480px) {
    margin-left: 0;
    text-align: center;
    margin-top: 50%;
    margin-bottom: 5%;
  }

  @media (max-width: 425px) {
    margin-top: 77%;
  }

  @media (max-width: 375px) {
    margin-left: 0;
    text-align: center;
    margin-top: 180%;

  }
`;

export const History = styled.div`
  height: 429px;
  flex-direction: column;
  margin-left: -50%;
  flex-shrink: 0;
  margin-bottom: 10%;

  @media (max-width: 612px) {
    margin-left: 0%;
    width: 550px;
  }

  @media (max-width: 375px) {
    margin-left: 12%;
    width: 270px;
  }
`;

export const Textp = styled.p`
  color: #FFF;
  font-size: 24px;
  font-family: Montserrat;
  font-weight: 600;
`;







export const FooterPerfil = styled.div`
  position: relative;
  height: 800px;
  width: 100%;
  background-color: #242424;
  padding-bottom: 20px;
  padding: 30px;

  @media (max-width: 1124px) {
    height: 1000px;
    padding-right: 20px;
    

  @media (max-width: 1024px) {
    height: 1000px;
    padding-right: 20px;
    padding-left: 20px;
  }

  @media (max-width: 768px) {
    height: 1350px;
    padding-right: 20px;
    padding-left: 20px;
  }

  @media (max-width: 468px) {
    height: 1500px;
  }
`;

export const FooterContentWrapper = styled.div`
  position: absolute;
`;

export const PerfisWrapper = styled.div`
  display: flex;
  margin-right: 6%;
  margin-left: -11%;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const PerfisContents = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4%;
  margin-bottom: 2%;
  flex-direction: column;
  margin-left: 17%;

  @media (max-width: 768px) {
    display: block;
    margin-left: 50%;
    margin-top: 20px;
  }
`;

export const PerfilImage = styled.img`
  width: 94.494px;
  height: 94.494px;
`;

export const PerfilContentTitle = styled.h3`
  margin-top: 10px;
  color: #FFF;
  font-size: 24px;
  font-family: Montserrat;
  font-weight: 800;
`;

export const PerfilDescription = styled.p`
  margin-top: 5px;
  color: #FFF;
  font-size: 17px;
  font-family: Montserrat;
`;


export const ContentF = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LogoContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const LogoF = styled.img`
  width: 475px;
  height: 400px;

  @media (max-width: 768px) {
    width: 300px;
    height: auto;
    margin-left: 30%;
  }
`;

export const CompanyFContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const CompanyTitle = styled.h3`
  color: #fff;
  font-size: 49px;
  font-family: Montserrat;
  font-weight: 800;
  margin-left: 110px;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-left: 50px;
  }
`;

export const CompanyDescription = styled.p`
  font-size: 25px;
  font-weight: 400;
  color: #ffffff;
  font-family: Montserrat;
  margin-top: 8px;
  margin-left: 75px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-left: 50px;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const ContactTitle = styled.h3`
  color: #fff;
  font-size: 42px;
  font-family: Montserrat;
  margin-left: 120px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 30px;
    margin-left: -10px;
  }
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #fff;
  font-size: 24px;
  font-family: Montserrat;

  @media (max-width: 768px) {
    font-size: 18px;
    
  }
`;

export const ContactListItem = styled.li`
  font-size: 16px;
  margin-left: 155px;
  color: #ffffff;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-left: 10px;
  }
`;