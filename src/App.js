import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Banner from "./components/Banner";
import SearchButton from "./components/SearchButton";
import EmployeeList from "./components/EmployeeList";
import './App.css';

function App() {
  console.log('in App')
  return (
    <div>
      <Banner />
      <SearchButton />
      <EmployeeList />
    </div>
    // <Router>
    //   <div>
    //     <Route exact path="/" component={Home} />
    //   </div>
    // </Router>
  );
}

export default App;