import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import container from '../containers/all.js';
import doSearch from '../actions/do-search.js';
import ArtistResult from './artist-result.js';

class SearchResultsPage extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }
  //TODO: pass search parameter as url, then call the search here

  search() {
    let searchTerm = this.props.location.search;
    searchTerm = searchTerm.slice(3, searchTerm.length);
    console.log('search term in path:', searchTerm);
    this.props.dispatch(doSearch(searchTerm));
  }
  componentDidMount() {
    this.search();
  }

  render() {
    // console.log(this.props.location);
    return (
      <main>
        <h2>search results page</h2>
        <div className="search-results-container">
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
      </main>
    );
  }
}

export default connect(container.allState)(SearchResultsPage);
