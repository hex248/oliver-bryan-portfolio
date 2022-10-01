import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@primer/octicons-react";

const LightDark = () => {
    const [ldIcon, setLDIcon] = useState("");

    useEffect(() => {
        if (localStorage.getItem("colourMode") === "dark") {
            SetDarkMode();
        } else if (localStorage.getItem("colourMode") === "light") {
            SetLightMode();
        } else {
            SetDarkMode();
        }
    }, []);

    const ToggleDarkMode = () => {
        if (localStorage.getItem("colourMode") === "dark") {
            SetLightMode();
        } else {
            SetDarkMode();
        }
    };

    const SetLightMode = () => {
        localStorage.setItem("colourMode", "light");
        document.documentElement.style.setProperty("--background", "#eeeeee");
        document.documentElement.style.setProperty("--second-background", "#ffffff");
        document.documentElement.style.setProperty("--foreground", "#040404");
        document.documentElement.style.setProperty("--second-foreground", "#000000");
        setLDIcon("moon");
    };

    const SetDarkMode = () => {
        localStorage.setItem("colourMode", "dark");
        document.documentElement.style.setProperty("--background", "#040404");
        document.documentElement.style.setProperty("--second-background", "#000000");
        document.documentElement.style.setProperty("--foreground", "#eeeeee");
        document.documentElement.style.setProperty("--second-foreground", "#ffffff");
        setLDIcon("sun");
    };

    // return (
    //     <div id="lightDarkToggle" className="colour-transition" onClick={ToggleDarkMode}>
    //         {ldIcon === "sun" ? <SunIcon /> : <MoonIcon />}
    //     </div>
    // );
    return (
        <div id="newLightDark" className="colour-transition" onClick={ToggleDarkMode}>
            {ldIcon === "sun" ? <SunIcon /> : <MoonIcon />}
        </div>
    );
};

export default LightDark;
