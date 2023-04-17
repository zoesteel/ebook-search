import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookService from '../../api/BookService';

export default function SearchForm() {
  const [apiCalled, setApiCalled] = useState(false);
  const [validInput, setvalidInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // change this to check if results are in the store first? or loader
    if(apiCalled && validInput) {
      navigate(`/results?s=${searchTerm}`);
    }
  },
  [apiCalled, searchTerm] 
  );

  useEffect(() => {
    searchTerm.length > 0 ? setvalidInput(true) : setvalidInput(false);
  },
  [searchTerm, setvalidInput]
  );

  // possible to have check box for which file types?
  const callApi = useCallback((searchTerm) => {
    BookService(searchTerm);
    setSearchTerm(searchTerm);
  },[BookService, setApiCalled, setSearchTerm]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchTerm = e.target[0].value;
    try {
      await callApi(searchTerm);
      setSearchTerm(searchTerm)
      setApiCalled(true);
      // const results = useSelector((state) => state.payload.books);
    } catch(err) {
      console.log(err);
    }
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    searchTerm.length > 0 ? setvalidInput(true) : setvalidInput(false);
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="search" onChange={(e) => handleChange(e)}></input>
        <button type="submit" disabled={!validInput} value={searchTerm}>Submit</button>
      </form>
    </>
  )
}
