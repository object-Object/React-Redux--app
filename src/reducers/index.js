import { combineReducers } from 'redux';
import reducerBooks from './reducerBooks';
import reducerAuthors from './reducerAuthors';
import ActiveBook from './reducerActiveBook';
import ActiveAuthorBooks from './reducerActiveAuthor';

const rootReducer = combineReducers({
    books: reducerBooks,
    authors: reducerAuthors,
    activeBook: ActiveBook,
    activeAuthorBooks: ActiveAuthorBooks
});

export default rootReducer;