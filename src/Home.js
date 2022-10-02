import React from "react";
import MediaQuery from "react-responsive";
import LightDark from "./LightDark";

const Home = () => {
    return (
        <>
            <MediaQuery minWidth={701}>
                <LightDark />
            </MediaQuery>
            <div className="main colour-transition" id="homeMain">
                <MediaQuery minWidth={701}>
                    <img id="homeBackground" src="/photos/me/Home.jpg" alt="home"></img>
                </MediaQuery>
                <MediaQuery maxWidth={700}>
                    <img id="homeBackground" src="/photos/me/HomeMobile.jpg" alt="home"></img>
                </MediaQuery>
            </div>
        </>
    );
};

export default Home;
