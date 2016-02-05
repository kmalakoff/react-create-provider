import React from 'react';

module.exports = (childContextTypes) => {
  class Provider extends React.Component {
    getChildContext() { let context = {}; Object.keys(childContextTypes).forEach(key => context[key] = this.props[key]); return context; }
    render() { return <div>{this.props.children}</div>; }
  };
  Provider.childContextTypes = childContextTypes;

  return Provider;
};
