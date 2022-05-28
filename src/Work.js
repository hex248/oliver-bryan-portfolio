import React, { useState } from "react";

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
                    <img className="grid-image" src={`photos/previews/people/${peopleIndex}.jpg`} />
                    <img className="portfolio-overlay" src={`photos/previews/people/overlay.png`} />
                </a>
                <a className="grid-item" href="/work/environment">
                    <img className="grid-image" src={`photos/previews/environment/${envIndex}.jpg`} />
                    <img className="portfolio-overlay" src={`photos/previews/environment/overlay.png`} />
                </a>
                <a className="grid-item" href="/work/nature">
                    <img className="grid-image" src={`photos/previews/nature/${natureIndex}.jpg`} />
                    <img className="portfolio-overlay" src={`photos/previews/nature/overlay.png`} />
                </a>
            </div>

            {/* <div id="PhotoGridContainer">
                <div className="PhotoGrid">
                    {photos
                        ? photos.map((p) => {
                              return (
                                  <a href={`full-view?p=full-size/${p}`}>
                                      <img src={`photos/web-size/${p}`} alt={p} className="photoPreview" />
                                  </a>
                              );
                          })
                        : ""}
                </div>
            </div> */}

            <SocialIcons />
        </div>
    );
}

export default Work;
