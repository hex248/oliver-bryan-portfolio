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
                    <Link to="/portraits" className="link">
                        PORTRAITS
                    </Link>
                    <Link to="/street" className="link">
                        STREET
                    </Link>
                    <Link to="/" id="pageTitle" className="link">
                        OLIVER BRYAN
                    </Link>
                    <Link to="/contact" className="link">
                        CONTACT
                    </Link>
                    <Link to="/about" className="link">
                        ABOUT
                    </Link>
                </MediaQuery>
                <MediaQuery maxWidth={700}>
                    <Link to="/" id="pageTitle" className="link">
                        OLIVER BRYAN
                    </Link>
                    <Link to="/portraits" className="link">
                        PORTRAITS
                    </Link>
                    <Link to="/street" className="link">
                        STREET
                    </Link>
                    <Link to="/contact" className="link">
                        CONTACT
                    </Link>
                    <Link to="/about" className="link">
                        ABOUT
                    </Link>
                </MediaQuery>
            </div>
        </>
    );
};

export default Header;
