import { CDN_URLS } from "../Utils/constants";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RestaurentCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId, sla } =
    resData?.info;

  return (
    <div className="res-card">
      <img alt="res-logo" src={CDN_URLS + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <span className="rating">
        <FontAwesomeIcon icon={faStar} style={{ color: "#fff" }} size="sm" />
        {"  "}
        {avgRating}
      </span>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurentCard;
