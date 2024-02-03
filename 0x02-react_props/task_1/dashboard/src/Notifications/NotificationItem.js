import React from 'react';

function NotificationItem() {
    return (
        <li data-notification-type={type} dangerouslySetInnerHTML={html}>
            {value}
        </li>
    )
}



export default NotificationItem;
