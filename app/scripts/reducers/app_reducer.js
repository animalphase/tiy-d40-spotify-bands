import doSearch from '../actions/do-search.js';

const initialState = {
  searchTerm: '',
  artistSearchResults: [],
  loadingResults: false
};

export default function AppReducer(currentState, action) {
  if (currentState === undefined) {
    return initialState;
  }

  switch (action.type) {
    // case 'SEARCH_BY_ARTIST':
    //   return currentState;

    // QUESTION: should there be an action here for doing the search,
    // or should that live all lone in actions/doSearch.js?

    case 'UPDATE_PATH_QUERY':
      console.log('REDUCER:', action.history);
      action.history.push(`/search-results?q=${action.searchTerm}`);
      return Object.assign({}, currentState, {
        searchTerm: action.searchTerm
      });

    case 'GO_TO_RESULTS_PAGE':
      return currentState;

    case 'RETURN_ARTISTS':
      return Object.assign({}, currentState, {
        artistSearchResults: action.artists
      });
  }

  console.log('Unhandled State!');
  return currentState;
}
