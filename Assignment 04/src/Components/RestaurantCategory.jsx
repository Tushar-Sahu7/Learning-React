import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  // console.log(data);
  const { title, itemCards } = data?.card?.card;
  return (
    <div className="menu-container">
      <div className="menu-card">
        <div className="menu-header" onClick={handleClick}>
          <span className="title">
            {title} ({itemCards.length})
          </span>
          <span>
            {showItems ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </span>
        </div>
        {showItems && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
