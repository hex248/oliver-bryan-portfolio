import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@primer/octicons-react";

const LightDark = () => {
    const [ldIcon, setLDIcon] = useState("");

    useEffect(() => {
        if (localStorage.getItem("colourMode") === "dark") {
            // SetDarkMode();
        } else if (localStorage.getItem("colourMode") === "light") {
            // SetLightMode();
        } else {
            // SetDarkMode();
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
        document.documentElement.style.setProperty("--background", "#f3f3f3");
        document.documentElement.style.setProperty("--second-background", "#ffffff");
        document.documentElement.style.setProperty("--foreground", "#000000");
        document.documentElement.style.setProperty("--second-foreground", "#000000");
        setLDIcon("moon");
    };

    const SetDarkMode = () => {
        localStorage.setItem("colourMode", "dark");
        document.documentElement.style.setProperty("--background", "#000000");
        document.documentElement.style.setProperty("--second-background", "#000000");
        document.documentElement.style.setProperty("--foreground", "#f3f3f3");
        document.documentElement.style.setProperty("--second-foreground", "#ffffff");
        setLDIcon("sun");
    };

    return (
        <>
            {1 < 0 ? (
                <div id="lightDarkToggle" className="colour-transition" onClick={ToggleDarkMode}>
                    {ldIcon === "sun" ? <SunIcon /> : <MoonIcon />}
                </div>
            ) : null}
        </>
    );
};

export default LightDark;
