import React, {useEffect, useState } from 'react';
import {
  Link,
  useSearchParams,
} from "react-router-dom";
import { useSelector } from 'react-redux';
import Title from '../components/Title';
import Book from '../components/Book/Book';
import ResultsStyles from '../components/styles/ResultsStyles';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import BookService from '../api/BookService';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LoadingBackdrop from '../components/LoadingBackdrop/LoadingBackdrop';

// Custom CSS for MuiBackdrop component
const theme = createTheme({
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFDDD2',
        },
      },
    },
  },
});

const ResultsPage = () => {
  const [queryParameters] = useSearchParams();
  const queryParam = queryParameters.get('s');
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const results = useSelector((state) => state.payload.books);
  const searchTerm = useSelector((state) => state.payload.searchTerm);
  const urlMatchesSearch = queryParam === searchTerm ? true : false;
  
  const recallApiWithQueryParam = async () => {
    try {
      await BookService(queryParam);
      // setLoading(false);
    } catch(err) {
      setLoading(false);
      setError(err);
      console.log(err);
    }
  };

  // when the results page is reloaded or accessed directly, the searchTerm from the store is undefined
  useEffect(() => {
    if(searchTerm === undefined) {
      setLoading(true);
      recallApiWithQueryParam();
    }
  }, [searchTerm]);

  // if search term matches query param then set loading to false
  useEffect(() => {
    if(urlMatchesSearch) {
      setLoading(false);
    } else if(searchTerm !== queryParam) {
      setLoading(true);
    }

    // if no search results, set loading to false
    if(results?.length === 0 && urlMatchesSearch) {
      setLoading(false);
    }
  }, [queryParam, searchTerm, results]);

  return (
    <>
      <ResultsStyles>
        <LoadingBackdrop open={isLoading} />

        <Title pageName={`Results for: ${searchTerm}`} />

        <Link to="/">
          <button className="search-again-btn">Search again</button>
        </Link>

        <div className="results">
          {results ? results.map((result) => (
            <Book key={result.file_id} title={result.file_name} url={result.file_link} host={result.referrer_host} />
          )) :
          <p>No results found</p>}
          {error && <p>Error: {error}. Please try again</p>}
        </div>

        {results?.length > 12 &&
          <Link to="/">
            <button className="search-again-btn">Search again</button>
          </Link>}


      </ResultsStyles>
    </>
  );
}

export default ResultsPage;
