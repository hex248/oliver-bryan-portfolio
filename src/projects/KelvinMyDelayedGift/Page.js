import Video from "../Video";
import "./style.css";

import projects from "../../data/projects.json";

import { SocialIcon } from "react-social-icons";

import { useMediaQuery } from "react-responsive";

const KelvinMyDelayedGift = () => {
  const project = projects.find((p) => p.name === "My Delayed Gift. The EP.");

  let videoSize = useMediaQuery({ query: "(max-width: 700px)" })
    ? "47.5vw"
    : "350px";

  return (
    <>
      <div class="main">
        <div class="projectHeader">
          <h1 className="projectTitle">My Delayed Gift. The EP.</h1>
          <h1 className="projectSubTitle">KELVIN</h1>
          <SocialIcon
            fgColor={"#ffffff"}
            bgColor={"#ffffff00"}
            className="headerSpotifyIcon"
            target="_blank"
            rel="noopener noreferrer"
            url={project.spotifyArtistURL}
          />
        </div>

        {/* EP COVER */}
        <div className="section">
          <div className="sectionHeading">
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
            <h1>EP Cover</h1>
          </div>

          <div className="sectionContent">
            {project.photos
              .filter((p) => p.name.includes("EP Cover Shoot"))
              .map((p) => {
                return <img src={p.url} className={"projectPhoto"} />;
              })}
          </div>
        </div>

        {/* Cologne Fisheye Promo Videos */}
        <div className="section">
          <div className="sectionHeading">
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
            <h1>Cologne Promo Videos (Fisheye)</h1>
          </div>

          <div className="sectionContent">
            {project.videos
              .filter((v) => v.name.includes("Cologne Fisheye Promo Video "))
              .map((v) => {
                return (
                  <Video
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
      </div>
    </>
  );
};

export default KelvinMyDelayedGift;
