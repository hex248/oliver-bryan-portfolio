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
                {videos.length > 3 ? (
                    <>
                        <div className="gridColumn">{videos ? videos.slice(2 * Math.floor(videos.length / 3), videos.length).map((v) => <Player video={v} />) : ""}</div>
                        <div className="gridColumn">{videos ? videos.slice(Math.floor(videos.length / 3), 2 * Math.floor(videos.length / 3)).map((v) => <Player video={v} />) : ""}</div>
                        <div className="gridColumn">{videos ? videos.slice(0, Math.floor(videos.length / 3)).map((v) => <Player video={v} />) : ""}</div>
                    </>
                ) : (
                    <>
                        {videos[0] ? (
                            <div className="gridColumn">
                                <Player video={videos[0]} />
                            </div>
                        ) : (
                            ""
                        )}
                        {videos[1] ? (
                            <div className="gridColumn">
                                <Player video={videos[1]} />
                            </div>
                        ) : (
                            ""
                        )}
                        {videos[2] ? (
                            <div className="gridColumn">
                                <Player video={videos[2]} />
                            </div>
                        ) : (
                            ""
                        )}
                    </>
                )}
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
