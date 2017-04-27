import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import container from '../containers/all.js';
import ArtistResult from './artist-result.js';

import SearchResultsContainer from './search-results-container';

import doSearch from '../actions/do-search.js';

class SearchResultsPage extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }
  //TODO: pass search parameter as url, then call the search here

  // search(searchTerm) {
  //   let searchTerm = this.props.location.search;
  //   searchTerm = searchTerm.slice(3, searchTerm.length);
  //   console.log('search term in path:', searchTerm);
  //   this.props.dispatch(doSearch(searchTerm));
  // }
  // componentDidMount() {
  //   this.search();
  // }

  // searchTerm={this.props.location.search.slice(3, searchTerm.length)}

  search(searchTerm) {
    // let searchTerm = this.props.location.search;
    // searchTerm = searchTerm.slice(3, searchTerm.length);
    this.props.dispatch(doSearch(searchTerm));
  }

  // after navigating to search page with a query
  componentWillMount() {
    let searchTerm = this.props.location.search;
    searchTerm = searchTerm.slice(3, searchTerm.length);
    this.search(searchTerm);
  }

  // after perfoming additional searches while on the search page
  componentWillUpdate(nextProps) {
    let searchTerm = nextProps.location.search;
    searchTerm = searchTerm.slice(3, searchTerm.length);
    if (this.props.searchTerm !== nextProps.searchTerm) this.search(searchTerm);
  }

  render() {
    // this.search();
    // console.log(this.props.location);
    // history.push(`/search-results?q=${this.props.searchTerm}`);
    // search(this.props.searchTerm);
    return (
      <main>
        <h2>search results page</h2>
        {/*<SearchResultsContainer
          searchTerm={this.props.location.search.slice(
            3,
            this.props.location.search.slice.length
          )}
        />*/}
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
