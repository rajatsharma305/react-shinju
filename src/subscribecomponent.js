import React from 'react';

const subscribeComponent = (StateTree, stateKey) => Component =>
  class ShinjuSubscribedComponent extends React.Component {
    componentDidMount() {
      this.unsubscribe = StateTree.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    static displayName = `subscribed(${Component.displayName ||
      Component.name ||
      'Component'})`;

    render() {
      return React.createElement(Component, {
        [stateKey || 'state']: StateTree.getTree(),
        ...this.props,
      });
    }
  };

export default subscribeComponent;
