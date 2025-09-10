import React from "react";
import { NavLink } from "react-router";

export const NAVBAR_HEIGHT = "56px";

export default function Navigation() {
  const routes = [
    { path: "/", title: "Home" },
    { path: "/counter", title: "Counter" },
    { path: "/todo", title: "Todo" },
    { path: "/profile", title: "Profile" },
    { path: "/products", title: "Products" },
    { path: "/comments", title: "Comments" },
    { path: "/weather", title: "Weather" },
    { path: "/buttons", title: "Buttons"},
  ];

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: NAVBAR_HEIGHT,
    display: "flex",
    alignItems: "center",
    padding: "0 12px",
    background: "#fff",
    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
    zIndex: 1000,
  };

  const linkStyle = {
    padding: "6px 10px",
    textDecoration: "none",
    color: "#222",
    display: "inline-block",
    borderRadius: 4,
  };
  const activeStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
  };

  return (
    <nav style={navStyle}>
      <ul
        style={{
          display: "flex",
          gap: 8,
          listStyle: "none",
          margin: 0,
          padding: 0,
          width: "100%",
          alignItems: "center",
        }}
      >
        {routes.map((route, index) => (
          <li key={index}>
            <NavLink
              to={route.path}
              style={({ isActive }) =>
                isActive ? { ...linkStyle, ...activeStyle } : linkStyle
              }
            >
              {route.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
