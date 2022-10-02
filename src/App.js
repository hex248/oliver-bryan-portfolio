import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./Home.css";
import "./Gallery.css";
import "./Contact.css";
import "./About.css";
import "./font.css";

import Home from "./Home";
import Header from "./Header";
import Gallery from "./Gallery";
import Contact from "./Contact";
import About from "./About";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="portraits" element={<Gallery category={"portraits"} />} />
                    <Route path="street" element={<Gallery category={"street"} />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<App />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
