import styled from "styled-components";

export const HeroContainer = styled.div`
// border:1px solid red;
text-align:center;

  padding-bottom: 2rem;
  padding-top: 4rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  h1{
      font-size:30px;
      font-weight:bold;
      font-weight:underline;
  }
  .name{
      font-size:50px;
  }
.contacts{
    // border:1px solid black;
    // display:flex;
    margin-top:20px;
    justify-content: center;
   
}
.contacts>div{
    // border:1px solid black;
    margin-top:20px;
    margin-left:10px;
    margin-right:10px;
}
i{
    font-size:30px;

}
.linkedin i{
    cursor:pointer;
}
i:hover{
    color:blue;
}
p{
    color:white;
}


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

 