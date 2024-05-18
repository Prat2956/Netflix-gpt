import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackGround = ({movieId}) => {
  const tailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useTrailerVideo(movieId);
  return (
    <div className="w-">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + tailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
