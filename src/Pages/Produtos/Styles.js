import { styled } from "styled-components";

export const Container = styled.div`
height: 4800px;
width: 100%;
background-color: #000000;

@media (max-width: 1188px) {
    height: 12700px;
  }

@media (max-width: 768px) {
    height: 12700px;
}
`

export const ContentWrapper = styled.div`
  position: absolute;
  height: 3500px;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
    color: #FFF;
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 64px;
    font-family: Montserrat;
    font-weight: 800;
`;

export const CardWrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 10%;
 margin-left: 15%;


 @media (max-width: 1354px) {
    margin-left: 5%;
  }


  @media (max-width: 1188px) {
    display: block;
    margin-left: 35%;
    gap: 0;
  }

 @media (max-width: 1024px) {
    display: block;
    margin-left: 35%;
    gap: 0;
  }

  @media (max-width: 768px) {
    display: block;
    margin-left: 35%;
    gap: 0;
  }

  @media (max-width: 521px) {
    display: block;
    margin-left: 0%;
    gap: 0;
  }

`;


export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 10px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;

export const CardImage = styled.img`
    width: 378px;

    height: 317px;

`;

export const CardDescription = styled.p`
    color: #FFF;
    text-align: center;
    font-size: 36px;
    font-family: Montserrat;
    font-weight: 500;
`;

export const AccessButton = styled.button`
    width: 236px;
    height: 76px;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    font-family: Montserrat;
    font-weight: 500;
    border-radius: 50px;
`;