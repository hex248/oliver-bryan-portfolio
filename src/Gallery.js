import React, { useState, useEffect } from "react";
import MediaQuery from "react-responsive";

import portraits from "./photos/portraits.json";
import street from "./photos/street.json";

import LightDark from "./LightDark";

import { shuffle } from "shuffle-seed";
import { ArrowUpIcon } from "@primer/octicons-react";
import { useMediaQuery } from "react-responsive";

const Gallery = ({ category }) => {
    const [photos, setPhotos] = useState([]);

    const [portraitsPhotos, setportraitsPhotos] = useState([]);
    const [streetPhotos, setStreetPhotos] = useState([]);
    useEffect(() => {
        if (photos.length < 1) {
            console.log(category);
            console.log(portraits);
            let seed = Math.random();
            if (localStorage.getItem("seed") && Date.now() - localStorage.getItem("seedCreationTime") <= 60000) {
                seed = localStorage.getItem("seed");
            } else {
                localStorage.setItem("seed", seed);
                localStorage.setItem("seedCreationTime", Date.now());
            }
            let portraitsArr = shuffle(portraits, seed);
            setportraitsPhotos(portraitsArr);
            let streetArr = shuffle(street, seed);
            setStreetPhotos(streetArr);
            switch (category) {
                case "portraits":
                    setPhotos(portraitsArr);
                    break;
                case "street":
                    setPhotos(streetArr);
                    break;
                default:
                    setPhotos([]);
                    break;
            }
        }
    }, [photos.length, category]);

    useEffect(() => {
        if (category === "portraits" && streetPhotos.includes(photos[0])) {
            setPhotos(portraitsPhotos);
        } else if (category === "street" && portraitsPhotos.includes(photos[0])) {
            setPhotos(streetPhotos);
        }
    }, [category, portraitsPhotos, streetPhotos, photos]);

    const columnCount = useMediaQuery({ query: "(max-width: 701px)" }) ? 2 : 3; // mobile -> 2 columns, otherwise 3

    const Grid = () => {
        if (columnCount === 5) {
            return (
                <div className="gridRow">
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(0, Math.floor(photos.length / 5)).map((p) => {
                                  console.log(p);
                                  return <img src={`/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(Math.floor(photos.length / 5), Math.floor(photos.length / 5) * 2).map((p) => {
                                  console.log(p);
                                  return <img src={`/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(Math.floor(photos.length / 5) * 2, Math.floor(photos.length / 5) * 3).map((p) => {
                                  console.log(p);
                                  return <img src={`/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(Math.floor(photos.length / 5) * 3, Math.floor(photos.length / 5) * 4).map((p) => {
                                  console.log(p);
                                  return <img src={`/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(Math.floor(photos.length / 5) * 4, photos.length).map((p) => {
                                  console.log(p);
                                  return <img src={`/photos/${category}/web-size/${p}`} alt={p} key={p} />;
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
                                  return <img src={`/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(Math.floor(photos.length / 4), Math.floor(photos.length / 4) * 2).map((p) => {
                                  console.log(p);
                                  return <img src={`/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(Math.floor(photos.length / 4) * 2, Math.floor(photos.length / 4) * 3).map((p) => {
                                  console.log(p);
                                  return <img src={`/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(Math.floor(photos.length / 4) * 3, photos.length).map((p) => {
                                  console.log(p);
                                  return <img src={`/photos/${category}/web-size/${p}`} alt={p} key={p} />;
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
                                  return <img src={`/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(Math.floor(photos.length / 3), Math.floor(photos.length / 3) * 2).map((p) => {
                                  console.log(p);
                                  return <img src={`/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(Math.floor(photos.length / 3) * 2, photos.length).map((p) => {
                                  console.log(p);
                                  return <img src={`/photos/${category}/web-size/${p}`} alt={p} key={p} />;
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
                                  return <img src={`/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                    <div className="gridColumn">
                        {photos
                            ? photos.slice(Math.floor(photos.length / 2), photos.length).map((p) => {
                                  console.log(p);
                                  return <img src={`/photos/${category}/web-size/${p}`} alt={p} key={p} />;
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
                                  return <img src={`/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                              })
                            : ""}
                    </div>
                </div>
            );
        }
    };

    return (
        <>
            <MediaQuery minWidth={701}>
                <LightDark />
            </MediaQuery>
            <div className="scrollableElement colour-transition">
                <div className="main colour-transition">
                    <h1 id="galleryCategoryTitle" className="colour-transition">
                        {category.toUpperCase()}
                    </h1>
                    <div className="flexBreak" />
                    <Grid />
                </div>
                <div className="back-to-top-wrapper">
                    <a href="#top" className="back-to-top-link colour-transition-0-1s" aria-label="Scroll to Top">
                        <ArrowUpIcon className="colour-transition-0-1s" size={32} />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Gallery;
