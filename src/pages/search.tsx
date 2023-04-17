import React from 'react';
import Title from '../components/Title';
import SearchForm from '../components/SearchForm/SearchForm';

const SearchPage = () => {
  return (
    <>
      <Title pageName='Search ebooks' />
      <SearchForm />
    </>
  );
}

// TODO: 
// - results page displaying books
// - login to save search results

export default SearchPage;
