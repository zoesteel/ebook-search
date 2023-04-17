const PROJECT_GUTENBERG_KEY = process.env.PROJECT_GUTENBERG_KEY;
import { store } from './../redux/store';

export default function BookService(searchTerm) {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': PROJECT_GUTENBERG_KEY,
      'X-RapidAPI-Host': 'filepursuit.p.rapidapi.com'
    }
  };
  
  fetch(`https://filepursuit.p.rapidapi.com/?q=${searchTerm}&type=ebook`, options)
    .then((response) => response.json())
    .then((data) => {
      // console.log('data', data.files_found)
      // return data.files_found

      const storeResults = () => {
        return {
          type: 'BOOK_SEARCH',
          books: data.files_found,
          searchTerm: searchTerm
        }
      }
      store.dispatch(storeResults());
   })
    .catch(err => console.error(err));
}
