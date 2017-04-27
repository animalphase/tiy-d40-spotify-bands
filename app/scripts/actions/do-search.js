import Artist from '../models/artist.js';

export default function doSearch(searchParameters, history) {
  //All async action creators should return a function that takes 'dispatch' as its argument
  return function(dispatch) {
    //Before ajax call dispatch any needed actions
    // dispatch( { type: "STARTING_EXAMPLE_ASYNC" });
    searchParameters = searchParameters.split(' ').join('+');
    console.log('searching for:', searchParameters);
    history.push(history.push('/search-results'));
    //Do the ajax call
    return $.ajax({
      method: 'GET',
      url: `https://api.spotify.com/v1/search?q=${searchParameters}&type=artist`,
      dataType: 'json'
    }).then(function(response) {
      let foundArtists = response.artists.items.reduce(
        (building, artist, index) => {
          building.push(
            new Artist({
              id: artist.id,
              artistName: artist.name,
              artistImage: artist.images[0]
                ? artist.images[0].url
                : 'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg',
              spotifyLink: artist.external_urls.spotify
            })
          );
          return building;
        },
        []
      );
      console.log('found artists:', foundArtists);
      dispatch({ type: 'RETURN_ARTISTS', artists: foundArtists });
    });
  };
}
