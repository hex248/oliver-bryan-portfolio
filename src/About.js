import "./App.css";
import "./About.css";
import SocialIcons from "./SocialIcons.js";

function About() {
    return (
<<<<<<< HEAD
        <div className="Home">
            <header className="Home-header">
                <a href="/">oliver bryan</a>
            </header>
            <h1 id="page-name">About</h1>
            <p>
                Based in London, United Kingdom. 17 years old.
                <br />
                Studying full time at East London Arts & Music.
            </p>

            <SocialIcons />
        </div>
=======
        <>
            <MediaQuery minWidth={701}>
                <LightDark />
            </MediaQuery>
            <div className="main colour-transition" id="aboutMain">
                <h1 id="aboutTitle">About</h1>
                <h1 id="aboutDescription">
                    Portrait and street photographer
                    <br />
                    18 years old
                    <br />
                    Based in London
                    <br />
                    <br />
                    See more on{" "}
                    <a href="https://instagram.com/oliverbryann" target="_blank" rel="noreferrer" className="embeddedLink">
                        Instagram
                    </a>
                </h1>
            </div>
        </>
>>>>>>> origin/rework
    );
}

export default About;
