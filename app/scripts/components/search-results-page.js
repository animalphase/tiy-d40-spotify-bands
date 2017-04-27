import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import container from '../containers/all.js';

class SearchResultsPage extends React.Component {
  constructor(props) {
    super(props);
  }
  //TODO: pass search parameter as url, then call the search here
  render() {
    return (
      <main>
        <h2>search results page</h2>
        <div className="search-results-container">
          {this.props.artistSearchResults.map((artist, index) => {
            return (
              <div className="artist-result" key={artist.id}>
                <h3>{artist.artistName}</h3>
                <img className="artist-image" src={artist.artistImage} />
                <Link to={artist.spotifyLink} target="blank">
                  View artist in Spotify
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    );
  }
}

export default connect(container.allState)(SearchResultsPage);
