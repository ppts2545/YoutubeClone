import React, { useState } from "react";
import "./left-SideBar.css";

const menuItems = [
  { id: 1, label: "Home", icon: "🏠" },
  { id: 2, label: "Shorts", icon: "🎬" },
  { id: 3, label: "Subscriptions", icon: "📺" },
  { id: 4, label: "Library", icon: "📚" },
  { id: 5, label: "History", icon: "🕒" },
  { id: 6, label: "Your videos", icon: "🎥" },
  { id: 7, label: "Watch later", icon: "⏰" },
  { id: 8, label: "Liked videos", icon: "👍" },
];

const LeftSidebarMenu = ({ isOpen }) => {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveId(item.id)}
          className={`sidebar-button ${activeId === item.id ? "active" : ""}`}
        >
          <span className="sidebar-icon">{item.icon}</span>
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default LeftSidebarMenu;
