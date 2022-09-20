import React from "react";
import { MoonIcon, SunIcon } from "@primer/octicons-react";

const LightDark = ({ onClick, icon }) => {
    return (
        <a id="lightDarkToggle" onClick={onClick}>
            {icon == "sun" ? <SunIcon /> : <MoonIcon />}
        </a>
    );
};

export default LightDark;
