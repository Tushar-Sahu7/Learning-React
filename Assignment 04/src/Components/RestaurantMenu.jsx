import useRestaurantMenu from "../Utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines } = resInfo?.cards[2]?.card?.card?.info;
  // console.log(resInfo?.cards[2]?.card?.card?.info.name);

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(itemCards.map((item) => item.card.info.name));

  return (
    <div>
      <div className="menu ">
        <div className="heading">
          <h1>{name}</h1>
          <h3>Menu</h3>
          <h3>{cuisines.join(", ")}</h3>
        </div>
        <ul className="res-container">
          {itemCards.map((item) => (
            <li key={item.card.info.id} className="res-card">
              <img
                className="menu-img"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                  item.card.info.imageId
                }
                alt="menu-img"
              />
              <h3>{item.card.info.name}</h3>
              <h4>
                <strong>Rs.</strong>{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
