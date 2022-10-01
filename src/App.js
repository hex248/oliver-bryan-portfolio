import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./Gallery.css";
import "./Home.css";
import "./font.css";

import Home from "./Home";
import Gallery from "./Gallery";
import Contact from "./Contact";
import About from "./About";

import LightDark from "./LightDark";
import Header from "./Header";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="portraits" element={<Gallery category={"people"} />} />
                    <Route path="street" element={<Gallery category={"street"} />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<App />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
