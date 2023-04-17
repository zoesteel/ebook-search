import React from 'react';
import SearchPage from './pages/search';
import ResultsPage from './pages/results';

// putting this in App.js instead of index js for now
// Redux Imports
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './styles/App.scss';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<SearchPage />} />
            <Route exact path="/results" element={<ResultsPage />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

// TODO: 
// - results page displaying books
// - login to save search results
// - store api key somewhere else

export default App;
