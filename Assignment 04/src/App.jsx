import "./App.css";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
