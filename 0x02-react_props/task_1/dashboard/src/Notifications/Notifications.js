import React from 'react';
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from '../Notifications/NotificationItem';

function Notifications({ notifications }) {
    return (
      <div className="Notifications">
        <button
          style={{color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "15px", position: "absolute", right: "2px", top: "2px", cursor: "pointer"}}
          aria-label="Close"
          onClick={console.log("Close button has been clicked")}
        >
          <img src={closeIcon} alt="closeIcon" width="10px" />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          {notifications &&
            notifications.map((notification, index) => (
            <NotificationItem
            key={index}
            type={notification.type}
            value={notification.value}
            html={notification.html}
        />
          ))}
        </ul>
      </div>
    );
}

export default Notifications;
