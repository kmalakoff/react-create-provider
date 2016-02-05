# react-create-provider
Creates a provider that can be used to dependency-inject properties into the React context

# Usage

```
import React from 'react';
import createProvider from 'react-create-provider';

import createStore from './path/to/create-my-store';
import MainComponent from './path/to/main-component';

let Provider = createProvider({store: React.PropTypes.object.isRequired})
ReactDOM.render(
  <Provider store={createStore()}>
    <MainComponent/>
  </Provider>,
  document.getElementById('app')
);
```

```
import React from 'react';

export default class MainComponent extends React.Component {
  static contextTypes = {store: React.PropTypes.object.isRequired};

  render() {
    let {store} = this.context;

    // use the store and render your component
  }
}
```
