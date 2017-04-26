import React from 'react';
import { connect } from 'react-redux';

import doSearch from '../actions/do-search.js';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleSearchClick() {
    if (this.refs.inputSearch.value) {
      this.props.dispatch(doSearch(this.refs.inputSearch.value));
    }
  }

  render() {
    return (
      <header>
        <form className="">
          <input
            type="text"
            ref="inputSearch"
            name="search for artist by name"
            placeholder="search for artists…"
          />
          <button
            type="submit"
            name="btn-submt-search"
            onClick={e => {
              e.preventDefault();
              this.handleSearchClick();
            }}
          >
            search
          </button>
        </form>
      </header>
    );
  }
}

export default connect()(Header);
