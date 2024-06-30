import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./Home.css";
import "./Gallery.css";
import "./Events.css";
import "./Contact.css";
import "./Booking.css";
import "./About.css";
import "./font.css";

import Home from "./Home";
import Header from "./Header";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Booking from "./Booking";
import About from "./About";
import Projects from "./Projects";
import CASSAMAMyDelayedGift from "./projects/CASSAMAMyDelayedGift/Page";
import CASSAMABlue from "./projects/CASSAMABlue/Page";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route
                        path="event/*"
                        element={<Gallery category={"event"} />}
                    />
                    <Route
                        path="events"
                        element={<Gallery category={"events"} />}
                    />
                    <Route
                        path="portraits"
                        element={<Gallery category={"portraits"} />}
                    />
                    <Route
                        path="street"
                        element={<Gallery category={"street"} />}
                    />
                    <Route path="contact" element={<Contact />} />
                    <Route path="booking" element={<Booking />} />
                    <Route path="about" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                    <Route
                        path="projects/cassama-my-delayed-gift"
                        element={<CASSAMAMyDelayedGift />}
                    />
                    <Route
                        path="projects/cassama-blue"
                        element={<CASSAMABlue />}
                    />
                    <Route path="*" element={<App />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
