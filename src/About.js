import "./App.css";
import "./About.css";
import SocialIcons from "./SocialIcons.js";

function About() {
    return (
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
    );
}

export default About;
