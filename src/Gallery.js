import React, { useState } from "react";
import { useLocation } from "react-router-dom";

<<<<<<< HEAD
import "./App.css";
import "./Gallery.css";
=======
import events from "./photos/events.json";
import portraits from "./photos/portraits.json";
import street from "./photos/street.json";
>>>>>>> origin/rework

import SocialIcons from "./SocialIcons.js";

import people from "./photos/people.json";
import environment from "./photos/environment.json";
import nature from "./photos/nature.json";

function Gallery() {
    const location = useLocation();
    let category = location.pathname.split("/work/")[1];
    const [photos, setPhotos] = useState([]);
<<<<<<< HEAD
    if (photos.length < 1) {
        switch (category) {
            case "people":
                setPhotos(shuffle(people));
                break;
            case "environment":
                setPhotos(shuffle(environment));
                break;
            case "nature":
                setPhotos(shuffle(nature));
                break;
            default:
                setPhotos([]);
                break;
        }
    }
=======

    const [eventsPhotos, setEventsPhotos] = useState([]);
    const [portraitsPhotos, setPortraitPhotos] = useState([]);
    const [streetPhotos, setStreetPhotos] = useState([]);

    const [eventPreviewIDX, setEventPreviewIDX] = useState(0);

    const [pageTitle, setPageTitle] = useState("");

    useEffect(() => {
        if (photos.length < 1) {
            let seed = Math.random();
            if (localStorage.getItem("seed") && Date.now() - localStorage.getItem("seedCreationTime") <= 60000) {
                seed = localStorage.getItem("seed");
            } else {
                localStorage.setItem("seed", seed);
                localStorage.setItem("seedCreationTime", Date.now());
            }

            let portraitsArr = shuffle(portraits, seed);
            setPortraitPhotos(portraitsArr);
            let streetArr = shuffle(street, seed);
            setStreetPhotos(streetArr);
            switch (category) {
                case "events":
                    setPageTitle("Events");
                    break;
                case "event":
                    let eventName = window.location.pathname.replace("/event/", "").replaceAll("+", " ");
                    let eventPhotos = events.find((e) => e.name === eventName).photos;
                    setEventsPhotos(eventPhotos);
                    setPhotos(shuffle(eventPhotos, seed));
                    setPageTitle(eventName);
                    break;
                case "portraits":
                    setPhotos(portraitsArr);
                    setPageTitle("Portraits");
                    break;
                case "street":
                    setPhotos(streetArr);
                    setPageTitle("Street");
                    break;
                default:
                    setPhotos([]);
                    break;
            }

            let maxLength = 0;

            for (let event of events) {
                if (maxLength === 0 || event.photos.length < maxLength) maxLength = event.photos.length;
            }

            setEventPreviewIDX(Math.floor(Math.random() * maxLength));
        }
    }, [photos.length, category]);

    useEffect(() => {
        if (category === "events" && (streetPhotos.includes(photos[0]) || portraitsPhotos.includes(photos[0]))) {
            setPhotos(eventsPhotos);
            setPageTitle("Events");
        } else if (category === "portraits" && (eventsPhotos.includes(photos[0]) || streetPhotos.includes(photos[0]))) {
            setPhotos(portraitsPhotos);
            setPageTitle("Portraits");
        } else if (category === "street" && (portraitsPhotos.includes(photos[0]) || eventsPhotos.includes(photos[0]))) {
            setPhotos(streetPhotos);
            setPageTitle("Street");
        } else if (category === "event") {
            setPageTitle(window.location.pathname.replace("/event/", "").replaceAll("+", " "));
        }
    }, [category, eventsPhotos, portraitsPhotos, streetPhotos, photos]);

    const columnCount = useMediaQuery({ query: "(max-width: 701px)" }) ? 2 : 3; // mobile -> 2 columns, otherwise 3

    const Grid = () => {
        if (columnCount === 5) {
            return (
                <div className="gridRow">
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(0, Math.floor(photos.length / 5)).map((p) => {
                                  console.log(p);
                                  return <img src={category === "event" ? `/photos/events/${pageTitle}/web-size/${p}` : `/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(Math.floor(photos.length / 5), Math.floor(photos.length / 5) * 2).map((p) => {
                                  console.log(p);
                                  return <img src={category === "event" ? `/photos/events/${pageTitle}/web-size/${p}` : `/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(Math.floor(photos.length / 5) * 2, Math.floor(photos.length / 5) * 3).map((p) => {
                                  console.log(p);
                                  return <img src={category === "event" ? `/photos/events/${pageTitle}/web-size/${p}` : `/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(Math.floor(photos.length / 5) * 3, Math.floor(photos.length / 5) * 4).map((p) => {
                                  console.log(p);
                                  return <img src={category === "event" ? `/photos/events/${pageTitle}/web-size/${p}` : `/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(Math.floor(photos.length / 5) * 4, photos.length).map((p) => {
                                  console.log(p);
                                  return <img src={category === "event" ? `/photos/events/${pageTitle}/web-size/${p}` : `/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                </div>
            );
        } else if (columnCount === 4) {
            return (
                <div className="gridRow">
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(0, Math.floor(photos.length / 4)).map((p) => {
                                  console.log(p);
                                  return <img src={category === "event" ? `/photos/events/${pageTitle}/web-size/${p}` : `/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(Math.floor(photos.length / 4), Math.floor(photos.length / 4) * 2).map((p) => {
                                  console.log(p);
                                  return <img src={category === "event" ? `/photos/events/${pageTitle}/web-size/${p}` : `/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(Math.floor(photos.length / 4) * 2, Math.floor(photos.length / 4) * 3).map((p) => {
                                  console.log(p);
                                  return <img src={category === "event" ? `/photos/events/${pageTitle}/web-size/${p}` : `/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(Math.floor(photos.length / 4) * 3, photos.length).map((p) => {
                                  console.log(p);
                                  return <img src={category === "event" ? `/photos/events/${pageTitle}/web-size/${p}` : `/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                </div>
            );
        } else if (columnCount === 3) {
            return (
                <div className="gridRow">
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(0, Math.floor(photos.length / 3)).map((p) => {
                                  console.log(p);
                                  return <img src={category === "event" ? `/photos/events/${pageTitle}/web-size/${p}` : `/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(Math.floor(photos.length / 3), Math.floor(photos.length / 3) * 2).map((p) => {
                                  console.log(p);
                                  return <img src={category === "event" ? `/photos/events/${pageTitle}/web-size/${p}` : `/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(Math.floor(photos.length / 3) * 2, photos.length).map((p) => {
                                  console.log(p);
                                  return <img src={category === "event" ? `/photos/events/${pageTitle}/web-size/${p}` : `/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                </div>
            );
        } else if (columnCount === 2) {
            return (
                <div className="gridRow">
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(0, Math.floor(photos.length / 2)).map((p) => {
                                  console.log(p);
                                  return <img src={category === "event" ? `/photos/events/${pageTitle}/web-size/${p}` : `/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(Math.floor(photos.length / 2), photos.length).map((p) => {
                                  console.log(p);
                                  return <img src={category === "event" ? `/photos/events/${pageTitle}/web-size/${p}` : `/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                </div>
            );
        } else if (columnCount === 1) {
            return (
                <div className="gridRow">
                    <div className="gridColumn">
                        {photos
                            ? photos.map((p) => {
                                  console.log(p);
                                  return <img src={category === "event" ? `/photos/events/${pageTitle}/web-size/${p}` : `/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                </div>
            );
        }
    };
>>>>>>> origin/rework

    const EventsDisplay = () => {
        return (
            <div className="eventsList">
                {events.map((e) => (
                    <Event event={e} />
                ))}
            </div>
        );
    };

    const Event = ({ event }) => {
        return (
            <>
                <a className="event noselect" href={`/event/${event.name.replaceAll(" ", "+")}`}>
                    <div className="imageContainer">
                        <img src={`/photos/events/${event.name}/web-size/${shuffle(event.photos)[eventPreviewIDX]}`} alt=""></img>
                    </div>
                    <div className="info">
                        <h1 className="eventName">{event.name}</h1>
                        <h1 className="eventDate">{event.date}</h1>
                    </div>
                </a>
            </>
        );
    };

    return (
<<<<<<< HEAD
        <div className="Home">
            <header className="Home-header noselect">
                <a href="/">oliver bryan</a>
            </header>

            <h1 id="page-name" className="noselect">
                {category ? category : "Gallery"}
            </h1>

            <br className="noselect" />
            <br className="noselect" />

            <a href="/work" className="Page-link noselect">
                {"back"}
            </a>

            <Nav category={category} />
            <div className="gridRow noselect">
                <div className="gridColumn">
                    {photos
                        ? photos.slice(2 * Math.floor(photos.length / 3), photos.length).map((p) => (
                              <a href={`/work/${category}/full?p=${p}`} target="_blank" rel="noreferrer" key={p}>
                                  <img src={`/photos/${category}/web-size/${p}`} alt={p} key={p} />
                              </a>
                          ))
                        : ""}
                </div>
                <div className="gridColumn">
                    {photos
                        ? photos.slice(Math.floor(photos.length / 3), 2 * Math.floor(photos.length / 3)).map((p) => (
                              <a href={`/work/${category}/full?p=${p}`} target="_blank" rel="noreferrer" key={p}>
                                  <img src={`/photos/${category}/web-size/${p}`} alt={p} key={p} />
                              </a>
                          ))
                        : ""}
                </div>
                <div className="gridColumn">
                    {photos
                        ? photos.slice(0, Math.floor(photos.length / 3)).map((p) => (
                              <a href={`/work/${category}/full?p=${p}`} target="_blank" rel="noreferrer" key={p}>
                                  <img src={`/photos/${category}/web-size/${p}`} alt={p} key={p} />
                              </a>
                          ))
                        : ""}
=======
        <>
            <MediaQuery minWidth={701}>
                <LightDark />
            </MediaQuery>
            <div className="scrollableElement colour-transition">
                <div className="main colour-transition">
                    <h1 id={category === "event" ? "eventTitle" : "galleryCategoryTitle"} className="colour-transition">
                        {category === "event" ? window.location.pathname.replace("/event/", "").replaceAll("+", " ") : capitalise(category)}
                    </h1>
                    {["portraits", "street", "event"].includes(category) ? <Grid /> : <EventsDisplay />}
>>>>>>> origin/rework
                </div>
                {category === "events" ? null : (
                    <div className="back-to-top-wrapper">
                        <a href="#top" className="back-to-top-link colour-transition-0-1s" aria-label="Scroll to Top">
                            <ArrowUpIcon className="colour-transition-0-1s" size={32} />
                        </a>
                    </div>
                )}
            </div>
            <Nav category={category} />
            <SocialIcons />
        </div>
    );
}

function capitalise(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export default Gallery;

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

function Nav({ category }) {
    let left = "";
    let right = "";
    switch (category) {
        case "people":
            left = "";
            right = "environment";
            break;
        case "environment":
            left = "people";
            right = "";
            break;
        default:
            left = "";
            right = "";
            break;
    }

    return (
        <div id="gallery-nav">
            {left !== "" ? <a href={`/work/${left}`} id="left-nav">{`< ${left}`}</a> : null}
            {right !== "" ? <a href={`/work/${right}`} id="right-nav">{`${right} >`}</a> : null}
        </div>
    );
}
