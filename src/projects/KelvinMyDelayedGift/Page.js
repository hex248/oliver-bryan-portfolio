import Video from "../Video";
import "./style.css";

import projects from "../../data/projects.json";

import { SocialIcon } from "react-social-icons";

import MediaQuery, { useMediaQuery } from "react-responsive";

const KelvinMyDelayedGift = () => {
  const project = projects.find((p) => p.name === "My Delayed Gift. The EP.");

  let videoSize = useMediaQuery({ query: "(max-width: 700px)" })
    ? "40vw"
    : "325px";

  let announcementVideoSize = useMediaQuery({ query: "(max-width: 700px)" })
    ? {
        width: "90vw",
        height: "160vw",
      }
    : {
        width: "390px",
        height: "700px",
      };

  let wayMusicVideoSize = useMediaQuery({ query: "(max-width: 700px)" })
    ? {
        width: "90vw",
        height: "50vw",
      }
    : {
        width: "1402px",
        height: "789px",
      };

  let wayPromoVideoSize = useMediaQuery({ query: "(max-width: 700px)" })
    ? {
        width: "90vw",
        height: "160vw",
      }
    : {
        width: "335.44px",
        height: "auto",
        // height: "596.3377778px",
      };

  return (
    <>
      <div className="main">
        <div className="projectHeader">
          <h1 className="projectTitle">My Delayed Gift. The EP.</h1>
          <h1 className="projectSubTitle">KELVIN</h1>
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
          {/* EP COVER */}
          <div className="section">
            <div className="sectionHeading">
              {project.photos.filter((v) =>
                v.name.includes("EP Cover Shoot")
              )[0].post === "N/A" ? null : (
                <SocialIcon
                  fgColor={"#ffffff"}
                  bgColor={"#ffffff00"}
                  className="sectionHeadingIcon"
                  target="_blank"
                  rel="noopener noreferrer"
                  url={
                    project.photos.filter((v) =>
                      v.name.includes("EP Cover Shoot")
                    )[0].post
                  }
                />
              )}
              <h1>EP Cover</h1>
            </div>

            <MediaQuery maxWidth={700}>
              <div className="sectionContent">
                {project.photos
                  .filter((p) => p.name.includes("EP Cover Shoot"))
                  .map((p) => {
                    return (
                      <img src={p.url} className={"projectPhoto"} alt={p.url} />
                    );
                  })}
              </div>
            </MediaQuery>
            <MediaQuery minWidth={701}>
              <div className="photoGrid">
                <div className="photoRow">
                  {project.photos
                    .filter((p) => p.name.includes("EP Cover Shoot"))
                    .slice(0, 4)
                    .map((p) => {
                      return (
                        <div>
                          <img
                            src={p.url}
                            className={"projectPhoto"}
                            alt={p.url}
                          />
                        </div>
                      );
                    })}
                </div>
                <div className="photoRow">
                  {project.photos
                    .filter((p) => p.name.includes("EP Cover Shoot"))
                    .slice(4)
                    .map((p) => {
                      return (
                        <div>
                          <img
                            src={p.url}
                            className={"projectPhoto"}
                            alt={p.url}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
            </MediaQuery>
          </div>

          {/* Announcement Video */}
          <div className="section">
            <div className="sectionHeading">
              {project.videos.filter((v) =>
                v.name.includes("Announcement Video")
              )[0].post === "N/A" ? null : (
                <SocialIcon
                  fgColor={"#ffffff"}
                  bgColor={"#ffffff00"}
                  className="sectionHeadingIcon"
                  target="_blank"
                  rel="noopener noreferrer"
                  url={
                    project.photos.filter((v) =>
                      v.name.includes("Announcement Video")
                    )[0].post
                  }
                />
              )}

              <h1>Announcement Video</h1>
            </div>

            <div className="sectionContent">
              <Video
                muted={false}
                controls
                className={"verticalVideo"}
                url={
                  project.videos.find((v) => v.name === "Announcement Video")
                    .url
                }
                preview={
                  project.videos.find((v) => v.name === "Announcement Video")
                    .thumbnail
                }
                width={announcementVideoSize.width}
                height={announcementVideoSize.height}
              />
            </div>
          </div>

          {/* The Way Music Video */}
          <div className="section">
            <div className="sectionHeading">
              {project.videos.filter((v) =>
                v.name.includes("The Way Music Video")
              )[0].post === "N/A" ? null : (
                <SocialIcon
                  fgColor={"#ffffff"}
                  bgColor={"#ffffff00"}
                  className="sectionHeadingIcon"
                  target="_blank"
                  rel="noopener noreferrer"
                  url={
                    project.photos.filter((v) =>
                      v.name.includes("The Way Music Video")
                    )[0].post
                  }
                />
              )}

              <h1>Way Music Video</h1>
            </div>

            <div className="musicVideoWithPhotos">
              <Video
                muted={false}
                controls
                className={"musicVideo"}
                url={
                  project.videos.find((v) => v.name === "The Way Music Video")
                    .url
                }
                preview={
                  project.videos.find((v) => v.name === "The Way Music Video")
                    .thumbnail
                }
                width={wayMusicVideoSize.width}
                height={wayMusicVideoSize.height}
              />

              <MediaQuery maxWidth={700}>
                <div className="photoRow">
                  {project.photos
                    .filter((p) => p.name.includes("The Way Music Video"))
                    .slice(0, 2)
                    .map((p) => {
                      return (
                        <div>
                          <img
                            src={p.url}
                            alt={p.url
                              .split("/")
                              [p.url.split("/").length - 1].replace(".jpg", "")}
                          />
                        </div>
                      );
                    })}
                </div>
                <div className="photoRow">
                  {project.photos
                    .filter((p) => p.name.includes("The Way Music Video"))
                    .slice(2, 4)
                    .map((p) => {
                      return (
                        <div>
                          <img
                            src={p.url}
                            alt={p.url
                              .split("/")
                              [p.url.split("/").length - 1].replace(".jpg", "")}
                          />
                        </div>
                      );
                    })}
                </div>
                <div className="photoRow">
                  <img
                    src={
                      project.photos.find(
                        (p) =>
                          p.name.includes("The Way Music Video") &&
                          p.url.includes("5.jpg")
                      ).url
                    }
                    alt="5"
                  />
                </div>
              </MediaQuery>
              <MediaQuery minWidth={701}>
                <div className="photoRow">
                  {project.photos
                    .filter(
                      (p) =>
                        p.name.includes("The Way Music Video") &&
                        !p.url.includes("5.jpg")
                    )
                    .map((p) => {
                      return (
                        <div>
                          <img
                            src={p.url}
                            alt={p.url
                              .split("/")
                              [p.url.split("/").length - 1].replace(".jpg", "")}
                          />
                        </div>
                      );
                    })}
                </div>
                <div className="photoRow">
                  <img
                    src={
                      project.photos.find(
                        (p) =>
                          p.name.includes("The Way Music Video") &&
                          p.url.includes("5.jpg")
                      ).url
                    }
                    alt="5"
                  />
                </div>
              </MediaQuery>
            </div>
          </div>

          {/* Cologne Fisheye Promo Videos */}
          <div className="section">
            <div className="sectionHeading">
              {project.videos.filter((v) =>
                v.name.includes("Cologne Fisheye Promo Video ")
              )[0].post === "N/A" ? null : (
                <SocialIcon
                  fgColor={"#ffffff"}
                  bgColor={"#ffffff00"}
                  className="sectionHeadingIcon"
                  target="_blank"
                  rel="noopener noreferrer"
                  url={
                    project.videos.filter((v) =>
                      v.name.includes("Cologne Fisheye Promo Video ")
                    )[0].post
                  }
                />
              )}
              <h1>Cologne Promo Videos (Fisheye)</h1>
            </div>

            <div className="sectionContent fisheyeGrid">
              {project.videos
                .filter((v) => v.name.includes("Cologne Fisheye Promo Video "))
                .map((v) => {
                  return (
                    <Video
                      autoPlay
                      className={"verticalVideo"}
                      url={v.url}
                      preview={v.thumbnail}
                      width={videoSize}
                      height={videoSize}
                    />
                  );
                })}
            </div>
          </div>

          {/* The Way Promo Videos */}
          <div className="section">
            <div className="sectionHeading">
              {project.videos.filter((v) =>
                v.name.includes("The Way Promo Video ")
              )[0].post === "N/A" ? null : (
                <SocialIcon
                  fgColor={"#ffffff"}
                  bgColor={"#ffffff00"}
                  className="sectionHeadingIcon"
                  target="_blank"
                  rel="noopener noreferrer"
                  url={
                    project.photos.filter((v) =>
                      v.name.includes("The Way Promo Video ")
                    )[0].post
                  }
                />
              )}

              <h1>The Way Promo Videos</h1>
            </div>

            <div className="musicVideoWithPhotos">
              <div className="videoRow">
                {project.videos
                  .filter((v) => v.name.includes("The Way Promo Video"))
                  .map((v) => {
                    return (
                      <Video
                        light
                        loop={false}
                        autoPlay
                        muted={false}
                        controls
                        className={"verticalVideo"}
                        url={v.url}
                        preview={v.thumbnail}
                        width={wayPromoVideoSize.width}
                        height={wayPromoVideoSize.height}
                      />
                    );
                  })}
              </div>

              <MediaQuery maxWidth={700}>
                <div className="photoRow">
                  {project.photos
                    .filter((p) => p.name.includes("The Way Promo Video"))
                    .slice(0, 2)
                    .map((p) => {
                      return (
                        <div>
                          <img
                            src={p.url}
                            alt={p.url
                              .split("/")
                              [p.url.split("/").length - 1].replace(".jpg", "")}
                          />
                        </div>
                      );
                    })}
                </div>
                <div className="photoRow">
                  {project.photos
                    .filter((p) => p.name.includes("The Way Promo Video"))
                    .slice(2, 4)
                    .map((p) => {
                      return (
                        <div>
                          <img
                            src={p.url}
                            alt={p.url
                              .split("/")
                              [p.url.split("/").length - 1].replace(".jpg", "")}
                          />
                        </div>
                      );
                    })}
                </div>
              </MediaQuery>
              <MediaQuery minWidth={701}>
                <div className="photoRow">
                  {project.photos
                    .filter((p) => p.name.includes("The Way Promo Video"))
                    .map((p) => {
                      return (
                        <div>
                          <img
                            src={p.url}
                            alt={p.url
                              .split("/")
                              [p.url.split("/").length - 1].replace(".jpg", "")}
                          />
                        </div>
                      );
                    })}
                </div>
              </MediaQuery>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KelvinMyDelayedGift;
