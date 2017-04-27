import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ArtistResult extends React.Component {
  constructor(props) {
    super(props);
    this.handleVoteClick = this.handleVoteClick.bind(this);
  }

  handleVoteClick() {}

  render() {
    return (
      <a
        aria-label={`Visit ${this.props.artistName} on Spotify`}
        href={this.props.spotifyLink}
        className="artist-result"
        tabIndex="2"
      >
        <h3>{this.props.artistName}</h3>
        <img className="artist-image" src={this.props.artistImage} />
        {/*<Link to={this.props.spotifyLink} target="blank">
          View artist in Spotify
        </Link>*/}
        <button
          aria-label={`Vote for ${this.props.artistName}`}
          role="button"
          tabIndex="2"
          onClick={this.handleVoteClick}
        >
          vote
        </button>
      </a>
    );
  }
}

export default connect()(ArtistResult);
