import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
  class WithLoggingComponent extends Component {
    componentDidMount() {
      console.log(`Component ${this.getComponentName()} is mounted on componentDidMount()`);
    }

    componentWillUnmount() {
      console.log(`Component ${this.getComponentName()} is going to unmount on componentWillUnmount()`);
    }

    getComponentName() {
      return WrappedComponent.displayName || WrappedComponent.name || 'Component';
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLoggingComponent.displayName = `WithLogging(${WithLoggingComponent.getComponentName()})`;

  return WithLoggingComponent;
};

export default WithLogging;
