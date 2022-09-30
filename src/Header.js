import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="header colour-transition">
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
            </div>
        </>
    );
};

export default Header;
