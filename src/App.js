import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { isBrowser, isMobile, useMobileOrientation } from "react-device-detect";

import "./App.css";
import "./font.css";
import Home from "./Home";
import Work from "./Work";
import Gallery from "./Gallery";
import About from "./About";
import MobileHome from "./MobileHome";
import MobileWork from "./MobileWork";
import MobileGallery from "./MobileGallery";
import MobileAbout from "./MobileAbout";

export default function App() {
    let orientation = useMobileOrientation();
    if (isMobile && orientation.isPortrait) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route index element={<MobileHome />} />
                    <Route path="work" element={<MobileWork />} />
                    <Route path="work/people" element={<MobileGallery category="people" />} />
                    <Route path="work/environment" element={<MobileGallery category="environment" />} />
                    <Route path="work/nature" element={<MobileGallery category="nature" />} />
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
                    <Route path="work/people" element={<Gallery category="people" />} />
                    <Route path="work/environment" element={<Gallery category="environment" />} />
                    <Route path="work/nature" element={<Gallery category="nature" />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<App />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
