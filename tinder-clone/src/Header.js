import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img
        className="header__logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"
        alt=""
      />
      <IconButton>
        <ChatBubbleIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
