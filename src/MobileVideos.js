import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import "./App.css";
import "./Videos.css";

import SocialIcons from "./SocialIcons.js";

import videos from "./videos.json";

function Videos() {
    return (
        <div className="Home">
            <header className="Home-header noselect">
                <a href="/">oliver bryan</a>
            </header>

            <h1 id="page-name" className="noselect">
                Videos
            </h1>

            <br className="noselect" />
            <br className="noselect" />

            <a href="/work" className="Page-link noselect">
                {"back"}
            </a>

            <div className="gridRow noselect">
                <div className="gridColumn">{videos ? videos.map((v) => <Player video={v} />) : ""}</div>
            </div>
            <SocialIcons />
        </div>
    );
}

function Player({ video }) {
    return (
        <video className="videoPlayer" key={video.video} poster={video.thumbnail} controls loop>
            <source src={`/videos/${video.video}`} type="video/mp4" />
        </video>
    );
}

export default Videos;
