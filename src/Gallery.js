import React, { useState, useEffect } from "react";
import MediaQuery from "react-responsive";

import events from "./photos/events.json";
import portraits from "./photos/portraits.json";
import street from "./photos/street.json";

import LightDark from "./LightDark";

import { shuffle } from "shuffle-seed";
import { ArrowUpIcon } from "@primer/octicons-react";
import { useMediaQuery } from "react-responsive";

const Gallery = ({ category }) => {
  const [photos, setPhotos] = useState([]);

  const [eventsPhotos, setEventsPhotos] = useState([]);
  const [portraitsPhotos, setPortraitPhotos] = useState([]);
  const [streetPhotos, setStreetPhotos] = useState([]);

  const [eventPreviewIDX, setEventPreviewIDX] = useState(0);

  const [pageTitle, setPageTitle] = useState("");

  const [pageLink, setPageLink] = useState("");

  useEffect(() => {
    if (photos.length < 1) {
      let seed = Math.random();
      if (
        localStorage.getItem("seed") &&
        Date.now() - localStorage.getItem("seedCreationTime") <= 60000
      ) {
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
          setPageLink("");
          break;
        case "event":
          let eventName = window.location.pathname
            .replace("/event/", "")
            .replaceAll("+", " ");
          let eventPhotos = events.find((e) => e.name === eventName).photos;
          setEventsPhotos(eventPhotos);
          setPhotos(shuffle(eventPhotos, seed));
          setPageTitle(eventName);
          let eventLink = events.find((e) => e.name === eventName).link;
          setPageLink(eventLink);
          break;
        case "portraits":
          setPhotos(portraitsArr);
          setPageTitle("Portraits");
          setPageLink("");
          break;
        case "street":
          setPhotos(streetArr);
          setPageTitle("Street");
          setPageLink("");
          break;
        default:
          setPhotos([]);
          break;
      }

      let maxLength = 0;

      for (let event of events) {
        if (maxLength === 0 || event.photos.length < maxLength)
          maxLength = event.photos.length;
      }

      setEventPreviewIDX(Math.floor(Math.random() * maxLength));
    }
  }, [photos.length, category]);

  useEffect(() => {
    if (
      category === "events" &&
      (streetPhotos.includes(photos[0]) || portraitsPhotos.includes(photos[0]))
    ) {
      setPhotos(eventsPhotos);
      setPageTitle("Events");
      setPageLink("");
    } else if (
      category === "portraits" &&
      (eventsPhotos.includes(photos[0]) || streetPhotos.includes(photos[0]))
    ) {
      setPhotos(portraitsPhotos);
      setPageTitle("Portraits");
      setPageLink("");
    } else if (
      category === "street" &&
      (portraitsPhotos.includes(photos[0]) || eventsPhotos.includes(photos[0]))
    ) {
      setPhotos(streetPhotos);
      setPageTitle("Street");
      setPageLink("");
    } else if (category === "event") {
      setPageTitle(
        window.location.pathname.replace("/event/", "").replaceAll("+", " ")
      );
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
                  return (
                    <img
                      src={
                        category === "event"
                          ? `/photos/events/${pageTitle}/web-size/${p}`
                          : `/photos/${category}/web-size/${p}`
                      }
                      alt={p}
                      key={p}
                    />
                  );
                })
              : ""}
          </div>
          <div className="gridColumn">
            {photos
              ? photos
                  .slice(
                    Math.floor(photos.length / 5),
                    Math.floor(photos.length / 5) * 2
                  )
                  .map((p) => {
                    console.log(p);
                    return (
                      <img
                        src={
                          category === "event"
                            ? `/photos/events/${pageTitle}/web-size/${p}`
                            : `/photos/${category}/web-size/${p}`
                        }
                        alt={p}
                        key={p}
                      />
                    );
                  })
              : ""}
          </div>
          <div className="gridColumn">
            {photos
              ? photos
                  .slice(
                    Math.floor(photos.length / 5) * 2,
                    Math.floor(photos.length / 5) * 3
                  )
                  .map((p) => {
                    console.log(p);
                    return (
                      <img
                        src={
                          category === "event"
                            ? `/photos/events/${pageTitle}/web-size/${p}`
                            : `/photos/${category}/web-size/${p}`
                        }
                        alt={p}
                        key={p}
                      />
                    );
                  })
              : ""}
          </div>
          <div className="gridColumn">
            {photos
              ? photos
                  .slice(
                    Math.floor(photos.length / 5) * 3,
                    Math.floor(photos.length / 5) * 4
                  )
                  .map((p) => {
                    console.log(p);
                    return (
                      <img
                        src={
                          category === "event"
                            ? `/photos/events/${pageTitle}/web-size/${p}`
                            : `/photos/${category}/web-size/${p}`
                        }
                        alt={p}
                        key={p}
                      />
                    );
                  })
              : ""}
          </div>
          <div className="gridColumn">
            {photos
              ? photos
                  .slice(Math.floor(photos.length / 5) * 4, photos.length)
                  .map((p) => {
                    console.log(p);
                    return (
                      <img
                        src={
                          category === "event"
                            ? `/photos/events/${pageTitle}/web-size/${p}`
                            : `/photos/${category}/web-size/${p}`
                        }
                        alt={p}
                        key={p}
                      />
                    );
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
                  return (
                    <img
                      src={
                        category === "event"
                          ? `/photos/events/${pageTitle}/web-size/${p}`
                          : `/photos/${category}/web-size/${p}`
                      }
                      alt={p}
                      key={p}
                    />
                  );
                })
              : ""}
          </div>
          <div className="gridColumn">
            {photos
              ? photos
                  .slice(
                    Math.floor(photos.length / 4),
                    Math.floor(photos.length / 4) * 2
                  )
                  .map((p) => {
                    console.log(p);
                    return (
                      <img
                        src={
                          category === "event"
                            ? `/photos/events/${pageTitle}/web-size/${p}`
                            : `/photos/${category}/web-size/${p}`
                        }
                        alt={p}
                        key={p}
                      />
                    );
                  })
              : ""}
          </div>
          <div className="gridColumn">
            {photos
              ? photos
                  .slice(
                    Math.floor(photos.length / 4) * 2,
                    Math.floor(photos.length / 4) * 3
                  )
                  .map((p) => {
                    console.log(p);
                    return (
                      <img
                        src={
                          category === "event"
                            ? `/photos/events/${pageTitle}/web-size/${p}`
                            : `/photos/${category}/web-size/${p}`
                        }
                        alt={p}
                        key={p}
                      />
                    );
                  })
              : ""}
          </div>
          <div className="gridColumn">
            {photos
              ? photos
                  .slice(Math.floor(photos.length / 4) * 3, photos.length)
                  .map((p) => {
                    console.log(p);
                    return (
                      <img
                        src={
                          category === "event"
                            ? `/photos/events/${pageTitle}/web-size/${p}`
                            : `/photos/${category}/web-size/${p}`
                        }
                        alt={p}
                        key={p}
                      />
                    );
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
                  return (
                    <img
                      src={
                        category === "event"
                          ? `/photos/events/${pageTitle}/web-size/${p}`
                          : `/photos/${category}/web-size/${p}`
                      }
                      alt={p}
                      key={p}
                    />
                  );
                })
              : ""}
          </div>
          <div className="gridColumn">
            {photos
              ? photos
                  .slice(
                    Math.floor(photos.length / 3),
                    Math.floor(photos.length / 3) * 2
                  )
                  .map((p) => {
                    console.log(p);
                    return (
                      <img
                        src={
                          category === "event"
                            ? `/photos/events/${pageTitle}/web-size/${p}`
                            : `/photos/${category}/web-size/${p}`
                        }
                        alt={p}
                        key={p}
                      />
                    );
                  })
              : ""}
          </div>
          <div className="gridColumn">
            {photos
              ? photos
                  .slice(Math.floor(photos.length / 3) * 2, photos.length)
                  .map((p) => {
                    console.log(p);
                    return (
                      <img
                        src={
                          category === "event"
                            ? `/photos/events/${pageTitle}/web-size/${p}`
                            : `/photos/${category}/web-size/${p}`
                        }
                        alt={p}
                        key={p}
                      />
                    );
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
                  return (
                    <img
                      src={
                        category === "event"
                          ? `/photos/events/${pageTitle}/web-size/${p}`
                          : `/photos/${category}/web-size/${p}`
                      }
                      alt={p}
                      key={p}
                    />
                  );
                })
              : ""}
          </div>
          <div className="gridColumn">
            {photos
              ? photos
                  .slice(Math.floor(photos.length / 2), photos.length)
                  .map((p) => {
                    console.log(p);
                    return (
                      <img
                        src={
                          category === "event"
                            ? `/photos/events/${pageTitle}/web-size/${p}`
                            : `/photos/${category}/web-size/${p}`
                        }
                        alt={p}
                        key={p}
                      />
                    );
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
                  return (
                    <img
                      src={
                        category === "event"
                          ? `/photos/events/${pageTitle}/web-size/${p}`
                          : `/photos/${category}/web-size/${p}`
                      }
                      alt={p}
                      key={p}
                    />
                  );
                })
              : ""}
          </div>
        </div>
      );
    }
  };

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
        <a
          className="event noselect"
          href={`/event/${event.name.replaceAll(" ", "+")}`}
        >
          <div className="imageContainer">
            <img
              src={`/photos/events/${event.name}/web-size/${
                shuffle(event.photos)[eventPreviewIDX]
              }`}
              alt=""
            ></img>
          </div>
          <div className="imageCover"></div>
          <div className="info">
            <h1 className="eventName">{event.name}</h1>
            <h1 className="eventDate">{event.date}</h1>
          </div>
        </a>
      </>
    );
  };

  return (
    <>
      <MediaQuery minWidth={701}>
        <LightDark />
      </MediaQuery>
      <div className="scrollableElement colour-transition">
        <div className="main colour-transition">
          <a
            id={category === "event" ? "eventTitle" : "galleryCategoryTitle"}
            className="colour-transition"
            href={pageLink !== "" ? `${pageLink}` : null}
            target="_blank"
            rel="noreferrer"
          >
            {category === "event"
              ? window.location.pathname
                  .replace("/event/", "")
                  .replaceAll("+", " ")
              : capitalise(category)}
          </a>
          {["portraits", "street", "event"].includes(category) ? (
            <Grid />
          ) : (
            <EventsDisplay />
          )}
        </div>
        {category === "events" ? null : (
          <div className="back-to-top-wrapper">
            <a
              href="#top"
              className="back-to-top-link colour-transition-0-1s"
              aria-label="Scroll to Top"
            >
              <ArrowUpIcon className="colour-transition-0-1s" size={32} />
            </a>
          </div>
        )}
      </div>
    </>
  );
};

function capitalise(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default Gallery;
