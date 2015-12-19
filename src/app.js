/**
 * @flow
 */

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  render(): ReactElement {
    return <div>React Bootstrap</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
