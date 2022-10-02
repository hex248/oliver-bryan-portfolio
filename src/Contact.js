import React from "react";
import MediaQuery from "react-responsive";
import LightDark from "./LightDark";
import { MailIcon } from "@primer/octicons-react";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
    return (
        <>
            <MediaQuery minWidth={701}>
                <LightDark />
            </MediaQuery>
            <div className="main colour-transition" id="contactMain">
                <h1 id="contactTitle">CONTACT</h1>
                <div id="contactBox">
                    <div className="contactLink">
                        <a href="https://www.instagram.com/oliverbryann" target="_blank" rel="noreferrer">
                            <SocialIcon network="instagram" style={{ width: 150, height: 150 }} bgColor="none" fgColor={"#4747c5"} />
                        </a>
                    </div>
                    <div className="contactLink">
                        <a href="mailto:04oliverbryan@gmail.com" target="_blank" rel="noreferrer">
                            <MailIcon className="contactIcon" size={100} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
