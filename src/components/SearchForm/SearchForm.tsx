import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookService from '../../api/BookService';
import LoadingBackdrop from "../LoadingBackdrop/LoadingBackdrop";

export default function SearchForm() {
  const [apiCalled, setApiCalled] = useState(false);
  const [validInput, setvalidInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(apiCalled && validInput && isLoading) {
      navigate(`/results?s=${searchTerm}`);
    }
  },
  [apiCalled] 
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
    setLoading(true);
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
      <LoadingBackdrop open={isLoading} />
    </>
  )
}
