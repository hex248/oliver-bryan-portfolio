import "./Video.css";
import ReactPlayer from "react-player";

const Video = ({
  className,
  url,
  preview,
  width,
  height,
  muted = true,
  light = false,
  controls = false,
  autoPlay = false,
}) => {
  return (
    <ReactPlayer
      className={className}
      loop
      muted={muted}
      controls={controls}
      playing={autoPlay}
      url={url}
      width={width}
      height={height}
      light={
        light ? <img src={preview} alt="Thumbnail" width={width} /> : false
      }
    />
  );
};

export default Video;
