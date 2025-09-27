import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext, { themeContext } from "../Utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  //Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo">
          <FontAwesomeIcon
            icon={faUtensils}
            style={{ color: "#f45252" }}
            size="3x"
          />
        </div>
        <h1 className="pacifico-regular">Namaste Food</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "😎" : "🥶"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartShopping} size="xl" />(
              {cartItems.length} Items)
            </Link>
          </li>
          <li>{loggedInUser}</li>
          <li>
            <button
              className="login"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
