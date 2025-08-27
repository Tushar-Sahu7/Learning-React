import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header.jsx";

it("should have a header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const login = screen.getByRole("button", { name: "Login" });
  expect(login).toBeInTheDocument();
});

it("should have a header component with 0 items in the cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("(0 Items)");
  expect(cartItems).toBeInTheDocument();
});

it("should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const login = screen.getByRole("button", { name: "Login" });
  fireEvent.click(login);
  const logout = screen.getByRole("button", { name: "Logout" });
  expect(logout).toBeInTheDocument();
});
