import React, { useState, useEffect } from "react";
import MediaQuery from "react-responsive";

import projects from "./data/projects.json";

import LightDark from "./LightDark";
import "./Projects.css";

import { ArrowUpIcon } from "@primer/octicons-react";

const Projects = ({}) => {
  const Project = ({ project }) => {
    return (
      <>
        <a className="project" href={`${project.page}`}>
          <img
            src={project.photos.find((p) => p.name === "Cover Web").url}
            alt=""
          ></img>
          <div className="info">
            <h1 className="projectName">{project.name}</h1>
            <h1 className="projectClient">
              {project.client} - {project.date}
            </h1>
          </div>
        </a>
      </>
    );
  };

  return (
    <>
      <MediaQuery minWidth={701}>
        <LightDark />
      </MediaQuery>
      <div className="scrollableElement colour-transition">
        <div className="main colour-transition">
          <div className="projectsList">
            {projects.map((p) => (
              <Project project={p} />
            ))}
          </div>
        </div>
        {projects.length < 4 ? null : (
          <div className="back-to-top-wrapper">
            <a
              href="#top"
              className="back-to-top-link colour-transition-0-1s"
              aria-label="Scroll to Top"
            >
              <ArrowUpIcon className="colour-transition-0-1s" size={32} />
            </a>
          </div>
        )}
      </div>
    </>
  );
};

function capitalise(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default Projects;
