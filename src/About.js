import React from "react";
import MediaQuery from "react-responsive";
import LightDark from "./LightDark";

const About = () => {
  return (
    <>
      <MediaQuery minWidth={701}>
        <LightDark />
      </MediaQuery>
      <div className="main colour-transition" id="aboutMain">
        <h1 id="aboutTitle">About</h1>
        <h1 id="aboutDescription">
          18 years old
          <br />
          Based in London
          <br />
          <br />
          <a
            href="https://instagram.com/oliverbryann"
            target="_blank"
            rel="noreferrer"
            className="embeddedLink"
          >
            Instagram
          </a>
        </h1>
        <img
          src="/made-by-oliver-bryan.svg"
          alt="Made by Oliver Bryan"
          style={{
            filter: "invert(100%)",
          }}
          id="aboutFooter"
        />
      </div>
    </>
  );
};

export default About;
