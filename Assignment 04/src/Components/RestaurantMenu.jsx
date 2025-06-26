import useRestaurantMenu from "../Utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  // console.log(resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines } = resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  return (
    <div>
      <div className="menu ">
        <div className="heading">
          <h1>{name}</h1>
          <h3>Menu</h3>
          <h3>{cuisines.join(", ")}</h3>
        </div>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.categoryId}
            data={category}
            showItems={index === showIndex ? true : false}
            setShowIndex={() =>
              index !== showIndex ? setShowIndex(index) : setShowIndex(null)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
