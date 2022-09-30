import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./Gallery.css";
import "./font.css";

import Home from "./Home";
import Gallery from "./Gallery";
import Contact from "./Contact";
import About from "./About";

import LightDark from "./LightDark";
import Header from "./Header";

export default function App() {
    const [ldIcon, setLDIcon] = useState("");

    useEffect(() => {
        if (localStorage.getItem("colourMode") === "dark") {
            SetDarkMode();
        } else if (localStorage.getItem("colourMode") === "light") {
            SetLightMode();
        }
    }, []);

    const ToggleDarkMode = () => {
        if (localStorage.getItem("colourMode") === "dark") {
            SetLightMode();
        } else {
            SetDarkMode();
        }
    };

    const SetLightMode = () => {
        localStorage.setItem("colourMode", "light");
        document.documentElement.style.setProperty("--background", "#eeeeee");
        document.documentElement.style.setProperty("--second-background", "#ffffff");
        document.documentElement.style.setProperty("--foreground", "#040404");
        document.documentElement.style.setProperty("--second-foreground", "#000000");
        setLDIcon("moon");
    };

    const SetDarkMode = () => {
        localStorage.setItem("colourMode", "dark");
        document.documentElement.style.setProperty("--background", "#040404");
        document.documentElement.style.setProperty("--second-background", "#000000");
        document.documentElement.style.setProperty("--foreground", "#eeeeee");
        document.documentElement.style.setProperty("--second-foreground", "#ffffff");
        setLDIcon("sun");
    };

    return (
        <>
            <BrowserRouter>
                <LightDark onClick={ToggleDarkMode} icon={ldIcon} />
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
