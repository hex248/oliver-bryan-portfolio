import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import "./App.css";
import "./Gallery.css";

import SocialIcons from "./SocialIcons.js";

import people from "./photos/people.json";
import environment from "./photos/environment.json";
import nature from "./photos/nature.json";

function Gallery() {
    const location = useLocation();
    let category = location.pathname.split("/work/")[1];
    const [photos, setPhotos] = useState([]);
    if (photos.length < 1) {
        switch (category) {
            case "people":
                setPhotos(shuffle(people));
                break;
            case "environment":
                setPhotos(shuffle(environment));
                break;
            case "nature":
                setPhotos(shuffle(nature));
                break;
            default:
                setPhotos([]);
                break;
        }
    }

    return (
        <div className="Home">
            <header className="Home-header noselect">
                <a href="/">oliver bryan</a>
            </header>

            <h1 id="page-name" className="noselect">
                {category ? category : "Gallery"}
            </h1>

            <br className="noselect" />
            <br className="noselect" />

            <a href="/work" className="Page-link noselect">
                {"back"}
            </a>

            <Nav category={category} />
            <div className="gridRow noselect">
                <div className="gridColumn">
                    {photos ? photos.slice(2 * Math.floor(photos.length / 3), photos.length).map((p) => <img src={`/photos/${category}/web-size/${p}`} alt={p} key={p} />) : ""}
                </div>
                <div className="gridColumn">
                    {photos ? photos.slice(Math.floor(photos.length / 3), 2 * Math.floor(photos.length / 3)).map((p) => <img src={`/photos/${category}/web-size/${p}`} alt={p} key={p} />) : ""}
                </div>
                <div className="gridColumn">{photos ? photos.slice(0, Math.floor(photos.length / 3)).map((p) => <img src={`/photos/${category}/web-size/${p}`} alt={p} key={p} />) : ""}</div>
            </div>
            <Nav category={category} />
            <SocialIcons />
        </div>
    );
}

export default Gallery;

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

function Nav({ category }) {
    let left = "";
    let right = "";
    switch (category) {
        case "people":
            left = "";
            right = "environment";
            break;
        case "environment":
            left = "people";
            right = "nature";
            break;
        case "nature":
            left = "environment";
            right = "";
            break;
        default:
            left = "";
            right = "";
            break;
    }

    return (
        <div id="gallery-nav">
            {left !== "" ? <a href={`/work/${left}`} id="left-nav">{`< ${left}`}</a> : null}
            {right !== "" ? <a href={`/work/${right}`} id="right-nav">{`${right} >`}</a> : null}
        </div>
    );
}
