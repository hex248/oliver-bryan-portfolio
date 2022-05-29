import React from "react";

import "./App.css";
import "./MobileWork.css";

import MobileSocialIcons from "./MobileSocialIcons.js";

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
            <br className="noselect" />

            <div className="portfolio-grid-mobile">
                <a className="grid-item-mobile" href="/work/people">
                    <img className="grid-image-mobile" src={`photos/previews/mobile/people/${peopleIndex}.jpg`} alt="" />
                    <img className="portfolio-overlay-mobile" src={`photos/previews/mobile/people/overlay.png`} alt="" />
                </a>
                <a className="grid-item-mobile" href="/work/environment">
                    <img className="grid-image-mobile" src={`photos/previews/mobile/environment/${envIndex}.jpg`} alt="" />
                    <img className="portfolio-overlay-mobile" src={`photos/previews/mobile/environment/overlay.png`} alt="" />
                </a>
                <a className="grid-item-mobile" href="/work/nature">
                    <img className="grid-image-mobile" src={`photos/previews/mobile/nature/${natureIndex}.jpg`} alt="" />
                    <img className="portfolio-overlay-mobile" src={`photos/previews/mobile/nature/overlay.png`} alt="" />
                </a>
            </div>
            <MobileSocialIcons />
        </div>
    );
}

export default Work;
