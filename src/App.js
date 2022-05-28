import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./font.css";
import Home from "./Home";
import Work from "./Work";
import Gallery from "./Gallery";
import FullView from "./FullView";
import About from "./About";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="work" element={<Work />} />
                <Route path="work/people" element={<Gallery category="people" />} />
                <Route path="work/environment" element={<Gallery category="environment" />} />
                <Route path="work/nature" element={<Gallery category="nature" />} />
                <Route path="full-view" element={<FullView />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
}
