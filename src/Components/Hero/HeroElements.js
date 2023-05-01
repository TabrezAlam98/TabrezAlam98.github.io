import styled from "styled-components";

export const HeroContainer = styled.div`
  padding-bottom: 2rem;
  // padding-top: 4rem;
  margin-top:18px;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  padding-top: 120px;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
  @media (max-width: 600px) {
    padding-top: 25px;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1;
  #user-detail-intro{
    display: flex;
  }

  h1 {
    font-size: 3rem;
    // color: rgb(119, 119, 121);
    opacity: 0.98;
    font-weight: 800;
  }

  h5 {
    font-size: 1.6rem;
    // color: rgb(119, 119, 121);
    margin-bottom: 1rem;
    font-weight: 800;
  }

  p {
    font-size: 17px;
    // color: rgb(119, 119, 121);
    opacity: 0.85;
  }

  .download{
    background-color:rgb(131,40,57);
    margin-top:20px;
   }
  .btn{
    color:white;
  }

  .download:hover{
    background-color:white;
    border:2px solid rgb(131,40,57);
    color:rgb(131,40,57);
  
  }
  .btn:hover{
    color:rgb(131,40,57);
   
  }
 

  @media screen and (max-width: 992px) {
    text-align: center;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

export const HeroRight = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  img:hover{
  transition:transform 2s;
  cursor:zoom-in;
  transform:scale(1.1);
  }
 .home-img{
 border:1px solid rgb(131,40,57);
 }
`;
