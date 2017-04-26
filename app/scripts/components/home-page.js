import React from 'react';
import { connect } from 'react-redux';
import container from '../containers/all.js';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <h2>home page</h2>
      </main>
    );
  }
}

export default connect(container.allState)(HomePage);
