import React from "react";
import "../styles/Header.css";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className="header">
      <nav>
        <FontAwesomeIcon
          icon={faReact}
          spin
          style={{ color: "#74C0FC" }}
          size="2xl"
        />
        <div className="search">
          <TextField
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "16px",
              },
            }}
            fullWidth
            id="outlined-basic"
            label="Search"
            variant="outlined"
          />
        </div>
        <FontAwesomeIcon
          icon={faCircleUser}
          style={{ color: "#74C0FC" }}
          size="2xl"
        />
      </nav>
    </div>
  );
};

export default Header;
