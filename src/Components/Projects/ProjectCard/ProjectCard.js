import './ProjectCard.css'
import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
} from "./ProjectCardElements";
import CalendarAndStats from '../../CalendarAndStats/CalendarAndStats';
function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <Card key={index}>
          <CardLeft className="cardL project-card" >
            <img src={list.img} alt={list.name} />
          </CardLeft>
          <CardRight>
            <h4 className="project-title">{list.title}</h4>
            <p>{list.description}</p>
            <Stack>
              <span className="stackTitle">TechStack </span>
              <span className="tags">{list.tech_stack}</span>
            </Stack>
            <BtnGroup>
              <a
                className="btn btn2 SecondarBtn"
                href={list.github_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                className="btn PrimaryBtn"
                href={list.demo_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo ➜
              </a>
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
      <CalendarAndStats/>
    </>
  );
}

export default ProjectCard;
