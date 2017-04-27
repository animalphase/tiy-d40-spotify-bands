import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import container from '../containers/all.js';

import ArtistResult from './artist-result.js';

class SearchResultsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-results-container">
        <h3>displaying results for "{this.props.searchTerm}"</h3>
        <div className="results">
          {this.props.artistSearchResults.map((artist, index) => {
            return (
              <ArtistResult
                key={artist.id}
                artistName={artist.artistName}
                artistImage={artist.artistImage}
                spotifyLink={artist.spotifyLink}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(container.allState)(SearchResultsPage);
