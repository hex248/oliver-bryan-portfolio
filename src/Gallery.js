import React, { useState, useEffect } from "react";

import people from "./photos/people.json";
import environment from "./photos/environment.json";

const Gallery = ({ category }) => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        if (photos.length < 1) {
            console.log(category);
            console.log(people);
            switch (category) {
                case "people":
                    setPhotos(shuffle(people));
                    break;
                case "environment":
                    setPhotos(shuffle(environment));
                    break;
                default:
                    setPhotos([]);
                    break;
            }
        }
    }, []);

    // const columnCount = 3;
    const columns = [0, 1, 2];

    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

    const Grid = () => {
        return (
            <div className="gridRow">
                {columns.length > 0
                    ? columns.map((i) => (
                          <div className="gridColumn" key={i}>
                              {photos
                                  ? photos.slice(clamp(i - 1, 0, columns.length), clamp(i - 1, 0, columns.length) * Math.floor(photos.length / columns.length)).map((p) => {
                                        console.log(p);
                                        return <img src={`/photos/${category}/web-size/${p}`} alt={p} key={p} />;
                                    })
                                  : ""}
                          </div>
                      ))
                    : ""}
            </div>
        );
    };

    return (
        <>
            <div className="main">
                <h1 id="galleryCategoryTitle">{category.toUpperCase()}</h1>
                <Grid />
                {/* <img src={`/photos/${category}/web-size/${photos[0]}`}></img> */}
            </div>
        </>
    );
};

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
