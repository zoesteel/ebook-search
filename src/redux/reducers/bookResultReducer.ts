import { BOOK_SEARCH } from '../actions/submittedValueActions';

// null is set as the default value here for state, because Redux will complain if state is undefined. 
// You can set initial state here, but it is recommended on the Redux documentation to preload the state within the redux store. 
// https://redux.js.org/recipes/structuring-reducers/initializing-state
// export default function bookResultReducer(state = null, action) {
//     switch (action.type) {
//         case SUBMIT_VALUE:
//             console.log('submit_value: ', action.payload)
//             return action.payload.bookResult;
//         default:
//             return state;
//     }
// }

const initialState = { books: [] }

export default function bookResultReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === BOOK_SEARCH) {
    // If so, make a copy of `state`
    // console.log('action.books', action.books);
    return {
        ...state,
        // and update the copy with the new value
        books: action.books,
        searchTerm: action.searchTerm
    }
  }
  // otherwise return the existing state unchanged
  return state;
}
