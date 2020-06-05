import React from "react";
import Table from "./components/Table";
import Container from "./components/Container";
import Banner from "./components/Banner";

import "./App.css";

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
