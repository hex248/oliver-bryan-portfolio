import "./Video.css";
import ReactPlayer from "react-player";

const Video = ({ className, url, preview, width, height }) => {
  return (
    <ReactPlayer
      className={className}
      muted
      loop
      playing={true}
      url={url}
      width={width}
      height={height}
      // light={<img src={preview} alt="Thumbnail" width={width} />}
    />
  );
};

export default Video;
