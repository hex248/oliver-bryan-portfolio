import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import LightDark from "./LightDark";

const Header = () => {
    return (
        <>
            <MediaQuery maxWidth={700}>
                <LightDark />
            </MediaQuery>

            <div className="header colour-transition">
                <Link to="/" id="pageTitle" className="link">
                    <img
                        src="/made-by-oliver-bryan.svg"
                        alt="Made by Oliver Bryan"
                        style={{
                            filter: "invert(100%)",
                        }}
                    />
                </Link>
                <div className="links">
                    <Link to="/portraits" className="link">
                        Portraits
                    </Link>
                    <Link to="/events" className="link">
                        Events
                    </Link>
                    <Link to="/street" className="link">
                        Street
                    </Link>
                </div>
                <div className="links">
                    <Link to="/projects" className="link">
                        Projects
                    </Link>
                    {/* <Link to="/booking" className="link">
                        Booking
                    </Link> */}
                    <Link to="/about" className="link">
                        About
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Header;
