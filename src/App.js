import React from "react";
import Table from "./components/Table";
import Container from "./components/Container";
import Banner from "./components/Banner";

import "./App.css";

// render Container, Banner, and Table
function App() {
  return (
    <div className="App">
      <Container>
        <Banner />
        <Table />
      </Container>
    </div>
  );
}

export default App;
