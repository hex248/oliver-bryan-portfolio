import Video from "../Video";
import "./style.css";

import projects from "../../data/projects.json";

import { SocialIcon } from "react-social-icons";

import MediaQuery, { useMediaQuery } from "react-responsive";

const CASSAMABlue = () => {
    const project = projects.find((p) => p.name === "Blue");

    let blueMusicVideoSize = useMediaQuery({ query: "(max-width: 700px)" })
        ? {
              width: "90vw",
              height: "50vw",
          }
        : {
              width: "1402px",
              height: "789px",
          };

    return (
        <>
            <div className="main">
                <div className="projectHeader">
                    <h1 className="projectTitle">Blue</h1>
                    <h1 className="projectSubTitle">CASSAMA</h1>
                    <SocialIcon
                        fgColor={"#1DB954"}
                        bgColor={"#ffffff00"}
                        className="headerSpotifyIcon"
                        target="_blank"
                        rel="noopener noreferrer"
                        url={project.spotifyArtistURL}
                    />
                </div>

                <div className="sections">
                    {/* Blue Music Video */}
                    <div className="section">
                        <div className="sectionHeading">
                            {project.videos.filter((v) =>
                                v.name.includes("Blue Music Video")
                            )[0].post === "N/A" ? null : (
                                <SocialIcon
                                    fgColor={"#ffffff"}
                                    bgColor={"#ffffff00"}
                                    className="sectionHeadingIcon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    url={
                                        project.photos.filter((v) =>
                                            v.name.includes("Blue Music Video")
                                        )[0].post
                                    }
                                />
                            )}

                            <h1>Blue Music Video</h1>
                        </div>

                        <div className="musicVideoWithPhotos">
                            <Video
                                muted={false}
                                controls
                                className={"musicVideo"}
                                url={
                                    project.videos.find(
                                        (v) => v.name === "Blue Music Video"
                                    ).url
                                }
                                preview={
                                    project.videos.find(
                                        (v) => v.name === "Blue Music Video"
                                    ).thumbnail
                                }
                                width={blueMusicVideoSize.width}
                                height={blueMusicVideoSize.height}
                            />

                            <MediaQuery maxWidth={700}>
                                <div className="photoRow">
                                    {project.photos
                                        .filter((p) =>
                                            p.name.includes("Blue Music Video")
                                        )
                                        .slice(0, 1)
                                        .map((p) => {
                                            return (
                                                <div>
                                                    <img
                                                        src={p.url}
                                                        alt={p.url
                                                            .split("/")
                                                            [
                                                                p.url.split("/")
                                                                    .length - 1
                                                            ].replace(
                                                                ".jpg",
                                                                ""
                                                            )}
                                                    />
                                                </div>
                                            );
                                        })}
                                </div>
                                <div className="photoRow">
                                    {project.photos
                                        .filter((p) =>
                                            p.name.includes("Blue Music Video")
                                        )
                                        .slice(1, 2)
                                        .map((p) => {
                                            return (
                                                <div>
                                                    <img
                                                        src={p.url}
                                                        alt={p.url
                                                            .split("/")
                                                            [
                                                                p.url.split("/")
                                                                    .length - 1
                                                            ].replace(
                                                                ".jpg",
                                                                ""
                                                            )}
                                                    />
                                                </div>
                                            );
                                        })}
                                </div>
                                <div className="photoRow">
                                    {project.photos
                                        .filter((p) =>
                                            p.name.includes("Blue Music Video")
                                        )
                                        .slice(2, 3)
                                        .map((p) => {
                                            return (
                                                <div>
                                                    <img
                                                        src={p.url}
                                                        alt={p.url
                                                            .split("/")
                                                            [
                                                                p.url.split("/")
                                                                    .length - 1
                                                            ].replace(
                                                                ".jpg",
                                                                ""
                                                            )}
                                                    />
                                                </div>
                                            );
                                        })}
                                </div>
                                <div className="photoRow">
                                    {project.photos
                                        .filter((p) =>
                                            p.name.includes("Blue Music Video")
                                        )
                                        .slice(3, 4)
                                        .map((p) => {
                                            return (
                                                <div>
                                                    <img
                                                        src={p.url}
                                                        alt={p.url
                                                            .split("/")
                                                            [
                                                                p.url.split("/")
                                                                    .length - 1
                                                            ].replace(
                                                                ".jpg",
                                                                ""
                                                            )}
                                                    />
                                                </div>
                                            );
                                        })}
                                </div>
                                <div className="photoRow">
                                    {project.photos
                                        .filter((p) =>
                                            p.name.includes("Blue Music Video")
                                        )
                                        .slice(4, 5)
                                        .map((p) => {
                                            return (
                                                <div>
                                                    <img
                                                        src={p.url}
                                                        alt={p.url
                                                            .split("/")
                                                            [
                                                                p.url.split("/")
                                                                    .length - 1
                                                            ].replace(
                                                                ".jpg",
                                                                ""
                                                            )}
                                                    />
                                                </div>
                                            );
                                        })}
                                </div>
                                <div className="photoRow">
                                    {project.photos
                                        .filter((p) =>
                                            p.name.includes("Blue Music Video")
                                        )
                                        .slice(5, 6)
                                        .map((p) => {
                                            return (
                                                <div>
                                                    <img
                                                        src={p.url}
                                                        alt={p.url
                                                            .split("/")
                                                            [
                                                                p.url.split("/")
                                                                    .length - 1
                                                            ].replace(
                                                                ".jpg",
                                                                ""
                                                            )}
                                                    />
                                                </div>
                                            );
                                        })}
                                </div>
                                <div className="photoRow">
                                    {project.photos
                                        .filter((p) =>
                                            p.name.includes("Blue Music Video")
                                        )
                                        .slice(6, 7)
                                        .map((p) => {
                                            return (
                                                <div>
                                                    <img
                                                        src={p.url}
                                                        alt={p.url
                                                            .split("/")
                                                            [
                                                                p.url.split("/")
                                                                    .length - 1
                                                            ].replace(
                                                                ".jpg",
                                                                ""
                                                            )}
                                                    />
                                                </div>
                                            );
                                        })}
                                </div>
                                <div className="photoRow">
                                    {project.photos
                                        .filter((p) =>
                                            p.name.includes("Blue Music Video")
                                        )
                                        .slice(7, 8)
                                        .map((p) => {
                                            return (
                                                <div>
                                                    <img
                                                        src={p.url}
                                                        alt={p.url
                                                            .split("/")
                                                            [
                                                                p.url.split("/")
                                                                    .length - 1
                                                            ].replace(
                                                                ".jpg",
                                                                ""
                                                            )}
                                                    />
                                                </div>
                                            );
                                        })}
                                </div>
                            </MediaQuery>
                            <MediaQuery minWidth={701}>
                                <div className="photoRow">
                                    {project.photos
                                        .filter((p) =>
                                            p.name.includes("Blue Music Video")
                                        )
                                        .slice(0, 2)
                                        .map((p) => {
                                            return (
                                                <div>
                                                    <img
                                                        src={p.url}
                                                        alt={p.url
                                                            .split("/")
                                                            [
                                                                p.url.split("/")
                                                                    .length - 1
                                                            ].replace(
                                                                ".jpg",
                                                                ""
                                                            )}
                                                    />
                                                </div>
                                            );
                                        })}
                                </div>
                                <div className="photoRow">
                                    {project.photos
                                        .filter((p) =>
                                            p.name.includes("Blue Music Video")
                                        )
                                        .slice(2, 4)
                                        .map((p) => {
                                            return (
                                                <div>
                                                    <img
                                                        src={p.url}
                                                        alt={p.url
                                                            .split("/")
                                                            [
                                                                p.url.split("/")
                                                                    .length - 1
                                                            ].replace(
                                                                ".jpg",
                                                                ""
                                                            )}
                                                    />
                                                </div>
                                            );
                                        })}
                                </div>
                                <div className="photoRow">
                                    {project.photos
                                        .filter((p) =>
                                            p.name.includes("Blue Music Video")
                                        )
                                        .slice(4, 7)
                                        .map((p) => {
                                            return (
                                                <div>
                                                    <img
                                                        src={p.url}
                                                        alt={p.url
                                                            .split("/")
                                                            [
                                                                p.url.split("/")
                                                                    .length - 1
                                                            ].replace(
                                                                ".jpg",
                                                                ""
                                                            )}
                                                    />
                                                </div>
                                            );
                                        })}
                                </div>
                            </MediaQuery>
                        </div>
                    </div>

                    <br />
                </div>
            </div>
        </>
    );
};

export default CASSAMABlue;
