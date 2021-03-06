import React from "react";
import { NavbarData } from "./NavbarData";
import { SocialMediaData } from "./SocialMediaData";
import "./Navbar.scss";

export default function SidebarNav() {
  return (
    <div className="Main_container">
      <h1 className="profile_title">Edwin John</h1>
      <div className="Sidebar_container">
        <img src="./K7Gm3.png" alt="logo" className="profile_logo" />

        <div className="Sidebar_nav">
          <ul className="Nav_ul">
            {NavbarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className="row"
                  id={window.location.pathname === item.Link ? "Active" : ""}
                  onClick={() => {
                    window.location.pathname = item.Link;
                  }}
                >
                  {""}
                  <div id="icon"> {item.icon} </div>
                  <div id="text"> {item.title} </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="socialmedia_links">
        <ul>
          {SocialMediaData.map((item, index) => {
            return (
              <li
                key={index}
                className="medial_links"
                onclick={() => {
                  window.location.pathname=item.link;
                }}
              >
                <a className="item" href={item.link}>{item.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
