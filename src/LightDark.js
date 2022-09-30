import React from "react";
import { MoonIcon, SunIcon } from "@primer/octicons-react";

const LightDark = ({ onClick, icon }) => {
    return (
        <div id="lightDarkToggle" className="colour-transition" onClick={onClick}>
            {icon === "sun" ? <SunIcon /> : <MoonIcon />}
        </div>
    );
};

export default LightDark;
