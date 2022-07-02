import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./App.css";
import "./MobileFullView.css";

import SocialIcons from "./SocialIcons.js";

function FullView({ category }) {
    const [fileName, setFileName] = useState("");
    let query = useQuery();

    useEffect(() => {
        setFileName(query.get("p"));
    }, [query]);

    return (
        <div className="Home">
            <header className="Home-header noselect">
                <a href="/">oliver bryan</a>
            </header>

            <img className="MobileFullImage" src={`/photos/${category}/web-size/${fileName}`} alt={""} />
            <SocialIcons />
        </div>
    );
}

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default FullView;
