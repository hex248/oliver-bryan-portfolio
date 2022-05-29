import React from "react";

import "./App.css";
import "./Work.css";

import SocialIcons from "./SocialIcons.js";

function Work() {
    let peopleIndex = Math.ceil(Math.random() * 5);
    let envIndex = Math.ceil(Math.random() * 5);
    let natureIndex = Math.ceil(Math.random() * 5);

    return (
        <div className="Home">
            <header className="Home-header noselect">
                <a href="/">oliver bryan</a>
            </header>

            <h1 id="page-name" className="noselect">
                Work
            </h1>
            <br />

            <div className="portfolio-grid">
                <a className="grid-item" href="/work/people">
                    <img className="grid-image" src={`photos/previews/desktop/people/${peopleIndex}.jpg`} alt="" />
                    <img className="portfolio-overlay" src={`photos/previews/desktop/people/overlay.png`} alt="" />
                </a>
                <a className="grid-item" href="/work/environment">
                    <img className="grid-image" src={`photos/previews/desktop/environment/${envIndex}.jpg`} alt="" />
                    <img className="portfolio-overlay" src={`photos/previews/desktop/environment/overlay.png`} alt="" />
                </a>
                <a className="grid-item" href="/work/nature">
                    <img className="grid-image" src={`photos/previews/desktop/nature/${natureIndex}.jpg`} alt="" />
                    <img className="portfolio-overlay" src={`photos/previews/desktop/nature/overlay.png`} alt="" />
                </a>
            </div>

            <SocialIcons />
        </div>
    );
}

export default Work;
