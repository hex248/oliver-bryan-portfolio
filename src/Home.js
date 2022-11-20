import React, { useState, useEffect } from "react";
import MediaQuery from "react-responsive";
import LightDark from "./LightDark";

const Home = () => {
    const [dbgIDX, setDBGIDX] = useState(-1);
    const [mbgIDX, setMBGIDX] = useState(-1);
    const desktopBackgrounds = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
    const mobileBackgrounds = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

    useEffect(() => {
        if (dbgIDX === -1) {
            setDBGIDX(Math.floor(Math.random() * desktopBackgrounds.length));
        }
        if (mbgIDX === -1) {
            setMBGIDX(Math.floor(Math.random() * mobileBackgrounds.length));
        }
    }, [dbgIDX, desktopBackgrounds.length, mbgIDX, mobileBackgrounds.length]);

    return (
        <>
            <MediaQuery minWidth={701}>
                <LightDark />
            </MediaQuery>
            <div className="main colour-transition" id="homeMain">
                <div id="homeBGContainer">
                    <MediaQuery minWidth={701}>
                        <div id="homeOverlay">
                            <h1 className="overlayText">PHOTOGRAPHER BASED IN LONDON</h1>
                        </div>
                        <img id="homeBackground" src={`/photos/backgrounds/desktop/${desktopBackgrounds[dbgIDX]}`} alt="home"></img>
                    </MediaQuery>
                    <MediaQuery maxWidth={700}>
                        <div id="homeOverlay">
                            <h1 className="overlayText">
                                PHOTOGRAPHER BASED
                                <br />
                                IN LONDON
                            </h1>
                        </div>
                        <img id="homeBackground" src={`/photos/backgrounds/mobile/${mobileBackgrounds[mbgIDX]}`} alt="home"></img>
                    </MediaQuery>
                </div>
            </div>
        </>
    );
};

export default Home;
