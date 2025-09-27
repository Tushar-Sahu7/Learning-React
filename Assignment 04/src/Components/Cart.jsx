import { clearCart } from "../Utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="menu">
        <div className="heading">
          <h1>Cart</h1>
          {cartItems.length ? (
            <button className="search-btn" onClick={handleClearCart}>
              Clear Cart
            </button>
          ) : null}
        </div>
      </div>
      <div className="menu-container">
        <div className="menu-card">
          {cartItems.length ? (
            <ItemList items={cartItems} />
          ) : (
            <h3>No items in the Cart, Please add some items!</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
