import React from "react";
import styled from "styled-components";
import GithubCalendar from "react-github-calendar";
const CalendarAndStats = () => {
  return (
    <MainContainer >
      <h1 
      
      style={{
         textTransform:"uppercase",
        textAlign:"center",
        fontSize:"40px",
        marginTop:"60px",
        fontFamily:"'Trebuchet MS', sans-serif"}}
      >
        Days I Worked
      </h1>
      <div id="github-top-langs"
        style={{
          width: "270px",
          height: "3px",
       
          backgroundColor: "rgb(164,49,88)",
          margin: "auto",
          marginBottom: "30px",
        }}
      ></div>
      <Container className="calendar">
        <GithubCalendar
          username="TabrezAlam98"
          year={new Date().getFullYear()}
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
      </Container>
      <h1
        style={{
          textTransform: "uppercase",
          textAlign: "center",
          fontFamily: "'Trebuchet MS', sans-serif",
          fontSize: "40px",
        }}
      >
        My Statistics
      </h1>
      <div
        style={{
          width: "250px",
          height: "3px",
          marginBottom: "20px",
          backgroundColor: "rgb(164,49,88)",
          margin: "auto",
        }}
      ></div>
      <div   id="github-stats-card" className="stats">
        <img
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=TabrezAlam98&show_icons=true&locale=en"
          alt="tabrez"
        />
        <img
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com/?user=TabrezAlam98&"
          alt="tabrez"
        />
      </div>
    </MainContainer>
  );
};

const Container = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  flex-direction: column;
  border: 2px solid rgb(164,49,88);
  border-radius: 50px 5px 50px 5px;
  padding: 30px 10px 30px 10px;
`;

const MainContainer = styled.div`
  #github-stats-card {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
    border-radius: 50px;
    margin-bottom: 50px;
  }
  

  #github-stats-card > img {
    padding: 20px 10px 20px 10px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1110px) {
    #github-stats-card {
      flex-direction: column;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    .calendar{
        width: 100%;
    }
   #github-stats-card {
      flex-direction: column;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .calendar{
        width: 100%;
    }
  #github-stats-card {
      width: 90%;
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 319px) {
    #github-stats-card {
      width: 90%;
      flex-direction: column;
    }
  }
`;

export default CalendarAndStats;
