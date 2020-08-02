import React from "react";
import "./header.css";
import {Link} from "react-router-dom";
import OnlineUsers from "./OnlineUsers";

export default function Header(props) {
  return (
    <div className="header">
        <div className="close_btn">
            <Link to="/">X</Link>
        </div>
        <div className="header_online_users">
            <OnlineUsers onlineUsers={props.onlineUsers}/>
        </div>
        <div className="heder_user_name">{props.username}</div>
        <div className="header_right">
            <span></span>
        </div>
    </div>
  );
}
