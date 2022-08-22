import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { isBrowser, isMobile, useMobileOrientation } from "react-device-detect";

import "./App.css";
import "./font.css";
// import "./Colours.css";
import Home from "./Home";
import Work from "./Work";
import Videos from "./Videos";
import Gallery from "./Gallery";
import FullView from "./FullView";
import About from "./About";
import MobileHome from "./MobileHome";
import MobileWork from "./MobileWork";
import MobileVideos from "./MobileVideos";
import MobileGallery from "./MobileGallery";
import MobileFullView from "./MobileFullView";
import MobileAbout from "./MobileAbout";

import colourSchemes from "./colourSchemes.json";

export default function App() {
    // update css
    let colourScheme = colourSchemes[0];

    for (let property of Object.keys(colourScheme)) {
        document.documentElement.style.setProperty(property, colourScheme[property]);
    }
    /*
        colour scheme
    */

    colourScheme = JSON.parse(localStorage.getItem("colourScheme"));

    // check if new colour scheme is needed
    let lastColourSchemeSetTime = localStorage.getItem("lastColourSchemeSetTime");

    // refresh every 10 minutes
    if (!lastColourSchemeSetTime || Date.now() - lastColourSchemeSetTime > 10 * 60 * 1000) {
        // if 10 minutes have passed set a new random colour scheme
        colourScheme = colourSchemes[Math.floor(Math.random() * colourSchemes.length)];
        localStorage.setItem("colourScheme", JSON.stringify(colourScheme));
        localStorage.setItem("lastColourSchemeSetTime", Date.now());
    }

    // update css
    for (let property of Object.keys(colourScheme)) {
        document.documentElement.style.setProperty(property, colourScheme[property]);
    }

    let orientation = useMobileOrientation();
    if (isMobile && orientation.isPortrait) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route index element={<MobileHome />} />
                    <Route path="work" element={<MobileWork />} />
                    <Route path="videos" element={<MobileVideos />} />
                    <Route path="work/people" element={<MobileGallery category="people" />} />
                    <Route path="work/people/full" element={<MobileFullView category="people" />} />
                    <Route path="work/environment" element={<MobileGallery category="environment" />} />
                    <Route path="work/environment/full" element={<MobileFullView category="environment" />} />
                    <Route path="about" element={<MobileAbout />} />
                    <Route path="*" element={<App />} />
                </Routes>
            </BrowserRouter>
        );
    } else if ((isMobile && orientation.isLandscape) || isBrowser) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="work" element={<Work />} />
                    <Route path="videos" element={<Videos />} />
                    <Route path="work/people" element={<Gallery category="people" />} />
                    <Route path="work/people/full" element={<FullView category={"people"} />} />
                    <Route path="work/environment" element={<Gallery category="environment" />} />
                    <Route path="work/environment/full" element={<FullView category={"environment"} />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<App />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
