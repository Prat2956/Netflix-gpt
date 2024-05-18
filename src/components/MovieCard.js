import { IMG_CDN_URL } from "../utils/constant";
const MovieCard = ({ posterUrl }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="movie card" src={IMG_CDN_URL + posterUrl} />
    </div>
  );
};

export default MovieCard;
