import { useContext } from "react";
import { NavLink } from "react-router-dom";


const menu = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Chat",
      to: "/chat",
    },
    {
      title: "Profile",
      to: "/profile",
    },
    {
      title: "Gists",
      to: "/gists",
    },
  ];

  export const Header = () => {
  
    return (
      <div>
 
        {menu.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {item.title}
          </NavLink>
        ))}
      </div>
    );
  };