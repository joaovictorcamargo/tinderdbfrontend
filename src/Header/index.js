import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import { IconButton } from "@material-ui/core";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>

      <img
        className="header__logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png"
      />

      <IconButton>
        <ChatBubbleIcon fontSize="large" className="header_icon" />
      </IconButton>
    </div>
  );
};

export default Header;
