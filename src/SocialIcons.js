import { SocialIcon } from "react-social-icons";

import "./SocialIcons.css";

export default function SocialIcons() {
    return (
        <div className="SocialBox noselect">
            <SocialIcon className="Icon" bgColor="none" fgColor={document.documentElement.style.getPropertyValue("--lightest-primary-accent")} url="https://instagram.com/oliverbryann" />
        </div>
    );
}
