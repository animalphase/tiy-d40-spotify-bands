import React from 'react';
import { connect } from 'react-redux';
import container from '../containers/all.js';

class SearchResultsPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <h2>search results page</h2>
        <div className="search-results-container">
          {this.props.artistSearchResults.map((artist, index) => {})}
        </div>
      </main>
    );
  }
}

export default connect(container.allState)(SearchResultsPage);
