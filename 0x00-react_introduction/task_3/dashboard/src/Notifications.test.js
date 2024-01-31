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
});
