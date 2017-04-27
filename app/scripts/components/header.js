import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import doSearch from '../actions/do-search.js';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.submitButton = this.submitButton.bind(this);
  }

  handleSearchClick(history) {
    if (this.refs.inputSearch.value) {
      // this.props.dispatch(doSearch(this.refs.inputSearch.value, history));
      let searchParameters = this.refs.inputSearch.value.split(' ').join('+');
      history.push(`/search-results?q=${searchParameters}`);
    }
  }
  // pulls in history from ~<Route/> thingy???
  submitButton({ history }) {
    return (
      <button
        role="button"
        aria-label="perform search"
        tabIndex="1"
        type="submit"
        name="btn-submt-search"
        onClick={e => {
          e.preventDefault();
          this.handleSearchClick(history);
        }}
      >
        search
      </button>
    );
  }

  headingClickable({ history }) {
    return (
      <h1
        role="heading, link"
        aria-label="return to home page"
        tabIndex="1"
        className="page-heading"
        onClick={() => history.push('/')}
      >
        artist voting
      </h1>
    );
  }

  render() {
    return (
      <header>
        <Route render={this.headingClickable} />
        <form className="">
          <input
            role="search text input"
            aria-label="enter artist name"
            tabIndex="1"
            type="text"
            ref="inputSearch"
            name="search for artist by name"
            placeholder="search for artists…"
          />
          {/* <Route/> required, so that history can be passed */}
          <Route render={this.submitButton} />
        </form>
      </header>
    );
  }
}

export default connect()(Header);
