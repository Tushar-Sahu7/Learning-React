import { useState } from "react";
import { MENU_URL } from "../Utils/constants";
import { addItems } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //Dispatch an Action
    dispatch(addItems(item));
    console.log(item);
  };

  return (
    <>
      {items.map((item) => (
        <div key={item.card.info.id} className="item-container">
          <div className="item-card">
            <div style={{ marginRight: "2rem" }}>
              <h3>{item.card.info.name}</h3>
              <h4>
                <strong>
                  ₹{" "}
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </strong>
              </h4>
              <p>{item.card.info.description}</p>
            </div>
            <div className="item-img">
              {item.card.info.imageId ? (
                <img src={MENU_URL + item.card.info.imageId} alt="menu-img" />
              ) : (
                <div className="placeholder"></div>
              )}
              <button className="item-btn" onClick={() => handleAddItem(item)}>
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
