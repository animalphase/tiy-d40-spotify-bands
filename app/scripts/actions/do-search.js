export default function doSearch(searchParameters) {
  //All async action creators should return a function that takes 'dispatch' as its argument
  return function(dispatch) {
    //Before ajax call dispatch any needed actions
    // dispatch( { type: "STARTING_EXAMPLE_ASYNC" });
    searchParameters = searchParameters.split(' ').join('+');
    console.log('searching!');
    console.log(searchParameters);
    //Do the ajax call
    return $.ajax({
      method: 'GET',
      url: `https://api.spotify.com/v1/search?q=${searchParameters}&type=artist`,
      dataType: 'json'
    }).then(function(response) {
      console.log(response);
      //After the ajax call dispatch any needed actions
      // dispatch( { type: "ENDING_EXAMPLE_ASYNC" });
    });
  };
}
