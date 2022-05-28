import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./App.css";
import "./FullView.css";

import SocialIcons from "./SocialIcons.js";

function Gallery() {
    const [photoPath, setPhotoPath] = useState("");
    let query = useQuery();

    useEffect(() => {
        setPhotoPath(query.get("p"));
    }, [query]);

    return (
        <div className="Home">
            <header className="Home-header">
                <a href="/">oliver bryan</a>
            </header>
            <a href="/gallery" className="Page-link" style={{ "font-size": "calc(1px + 2vmin)" }}>
                Back to Gallery
            </a>
            <br />
            <br />
            <img className="FullImage" src={`photos/${photoPath}`} alt={photoPath.split("/")[1]} />
            <SocialIcons />
        </div>
    );
}

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default Gallery;
