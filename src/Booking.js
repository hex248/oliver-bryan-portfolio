import React from "react";
import MediaQuery from "react-responsive";
import LightDark from "./LightDark";
import IGLink from "./IGLink";

const Booking = () => {
    return (
        <>
            <MediaQuery minWidth={701}>
                <LightDark />
            </MediaQuery>
            <div className="main colour-transition" id="bookingMain">
                <h1 id="bookingTitle">Booking</h1>
                <h1 id="bookingDescription">
                    Contact me about commisions on instagram: <IGLink word="@oliverbryann" />
                    <br />
                    Prices below.
                </h1>
                <table className="pricingTable">
                    <tr>
                        <th>Unedited #</th>
                        <th>Edited #</th>
                        <th>£</th>
                    </tr>
                    <tr>
                        <td>30</td>
                        <td>0</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>50</td>
                        <td>20</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>All</td>
                        <td>70</td>
                        <td>35</td>
                    </tr>
                </table>
            </div>
        </>
    );
};

export default Booking;
