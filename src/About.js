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
                <h1 id="aboutTitle">ABOUT</h1>
                <h1 id="aboutDescription">
                    Portrait and street photographer
                    <br />
                    17 years old
                    <br />
                    Based in London
                    <br />
                    See more at:
                    <br />
                    <a href="https://home.oliverbryan.com" target="_blank" rel="noreferrer" className="embeddedLink">
                        home.oliverbryan.com
                    </a>
                </h1>
            </div>
        </>
    );
};

export default About;
