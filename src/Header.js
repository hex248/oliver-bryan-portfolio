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
                <MediaQuery minWidth={701}>
                    <Link to="/" id="pageTitle">
                        Oliver Bryan
                    </Link>
                    <Link to="/portraits" className="link">
                        Portraits
                    </Link>
                    <Link to="/street" className="link">
                        Street
                    </Link>
                    {/* <Link to="/contact" className="link">
                        Contact
                    </Link> */}
                    <Link to="/about" className="link">
                        About
                    </Link>
                </MediaQuery>
                <MediaQuery maxWidth={700}>
                    <Link to="/" id="pageTitle" className="link">
                        Oliver Bryan
                    </Link>
                    <Link to="/portraits" className="link">
                        Portraits
                    </Link>
                    <Link to="/street" className="link">
                        Street
                    </Link>
                    {/* <Link to="/contact" className="link">
                        Contact
                    </Link> */}
                    <Link to="/about" className="link">
                        About
                    </Link>
                </MediaQuery>
            </div>
        </>
    );
};

export default Header;
