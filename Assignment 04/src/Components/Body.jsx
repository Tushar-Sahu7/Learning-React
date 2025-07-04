import { useState, useEffect, useContext } from "react";
import RestaurentCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/userContext.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [loading, setLoading] = useState(false);

  const RestaurantCardPromoted = withPromotedLabel(RestaurentCard);
  const fetchData = async () => {
    setLoading(true);
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.83730&lng=80.91650&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    const newRestaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setListOfRestaurants(newRestaurants);
    setFilteredRestaurant(newRestaurants);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilter = () => {
    // Split search text into words, match any word in name or cuisines
    const searchWords = searchText.toLowerCase().split(" ").filter(Boolean);
    const filtered = listOfRestaurants.filter((res) => {
      const name = res.info.name.toLowerCase();
      const cuisines = res.info.cuisines
        ? res.info.cuisines.join(" ").toLowerCase()
        : "";
      return searchWords.some(
        (word) => name.includes(word) || cuisines.includes(word)
      );
    });
    setFilteredRestaurant(filtered);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You are Offline! Please check your internet connection</h1>;
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleFilter();
              }
            }}
            placeholder="Search Restaurants..."
          />
          <button className="search-btn" onClick={handleFilter}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const topRated = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilteredRestaurant(topRated);
          }}
        >
          Top Rated Restaurant
        </button>
        <div>
          <label>UserName : </label>
          <input
            className="search-box"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/Restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.availability.opened ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurentCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>

      {loading && <p>Loading more restaurants...</p>}
    </div>
  );
};

export default Body;
