// MyComponent.jsx
import React, {useState} from 'react';
import './left-icon.css'; // Optional CSS

const LeftIcon = () => {
    const [activeId, setActiveId] = useState(1);

    const menuItems = [
        { id: 1, label: "Home", icon: "🏠" },
        { id: 2, label: "Shorts", icon: "🎬" },
        { id: 7, label: "Subscriptions", icon: "⏰" },
        { id: 8, label: "You", icon: "👍" },
    ];


  return (
    <div className="leftIcon-bar">
        {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveId(item.id)}
          className={`sidebar-button ${activeId === item.id ? "active" : ""}`}
        >
            <div className='leftIcon'>
                <span className="sidebar-icon">{item.icon}</span>
                {item.label}
            </div>
         
        </button>
      ))}
    </div>
  );
};

export default LeftIcon;
