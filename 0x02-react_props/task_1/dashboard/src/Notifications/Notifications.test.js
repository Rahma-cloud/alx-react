import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notification Component tests", () => {
    it("renders Notification component without crashing", () => {
        const notification = shallow(<Notifications />);

        expect(notification).toBeDefined();
    });
    it("renders ul", () => {
        const notification = shallow(<Notifications />);
    
        expect(notification.find("ul")).toBeDefined();
    });
    it("ensures Notification component renders three list items", () => {
        const notification = shallow(<Notifications />);
        const listItems = notification.find("li");

        expect(listItems).toHaveLength(3);
    });
    it("ensures Notification component has a test", () => {
        const notification = shallow(<Notifications />);
        const text = notification.find("p").text();

        expect(text).toBe("Here is the list of notifications");
    });

    it("ensures Notifications component renders the correct number of NotificationItem elements", () => {
        const sampleNotifications = [
          { type: "default", value: "Notification 1", html: null },
          { type: "success", value: "Notification 2", html: null },
          { type: "info", value: "Notification 3", html: null },
        ];
    
        const notifications = shallow(
          <Notifications notifications={sampleNotifications} />
        );
        
        const notificationItems = notifications.find("NotificationItem");
    
        expect(notificationItems).toHaveLength(sampleNotifications.length);
      });
    
      it("ensures Notifications component has a heading", () => {
        const notifications = shallow(<Notifications notifications={[]} />);
        const headingText = notifications.find("h2").text();
    
        expect(headingText).toBe("Notifications");
    });
});
