export const BOOK_SEARCH = 'BOOK_SEARCH';

export default function book_search() {
    return {
      type: 'BOOK_SEARCH',
      books: [],
      searchTerm: '',
    }
}
