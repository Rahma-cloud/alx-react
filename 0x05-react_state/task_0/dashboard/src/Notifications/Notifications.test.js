import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notification Component tests", () => {
    it("renders Notification component without crashing", () => {
        const notification = shallow(<Notifications />);

        expect(notification).toBeDefined();
    });
    test('does not rerender with the same list of notifications', () => {
      const sampleNotifications = [
        { type: 'default', value: 'Notification 1', html: null },
        { type: 'success', value: 'Notification 2', html: null },
        { type: 'info', value: 'Notification 3', html: null },
      ];
  
      const { container, rerender } = rerender(
        <Notifications displayDrawer listNotifications={sampleNotifications} />
      );
  
      const initialRender = container.innerHTML;
  
      // Update props with the same list
      rerender(<Notifications displayDrawer listNotifications={sampleNotifications} />);
  
      // Ensure the component does not rerender
      expect(container.innerHTML).toEqual(initialRender);
    });
  
    test('rerenders with a longer list of notifications', () => {
      const initialList = [
        { type: 'default', value: 'Notification 1', html: null },
        { type: 'success', value: 'Notification 2', html: null },
      ];
  
      const updatedList = [
        ...initialList,
        { type: 'info', value: 'Notification 3', html: null },
      ];
  
      const { container, rerender } = rerender(
        <Notifications displayDrawer listNotifications={initialList} />
      );
      rerender(<Notifications displayDrawer listNotifications={updatedList} />);
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

    it("calls console.log when markAsRead is invoked", () => {
      const consoleSpy = jest.spyOn(console, 'log');
      const notification = shallow(<Notifications />);
      const instance = notification.instance();
      
      instance.markAsRead(1);
      
      expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
      consoleSpy.mockRestore();
    });

    it("calls handleDisplayDrawer when menu item is clicked", () => {
      const handleDisplayDrawerMock = jest.fn();
      const notification = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawerMock} />);
      
      notification.find(".menuItem").simulate("click");
  
      expect(handleDisplayDrawerMock).toHaveBeenCalled();
    });
  
    it("calls handleHideDrawer when close button is clicked", () => {
      const handleHideDrawerMock = jest.fn();
      const notification = shallow(<Notifications handleHideDrawer={handleHideDrawerMock} displayDrawer />);
  
      notification.find("button[aria-label='Close']").simulate("click");
  
      expect(handleHideDrawerMock).toHaveBeenCalled();
    });
  
});
