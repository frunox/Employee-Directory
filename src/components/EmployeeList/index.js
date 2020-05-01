import React, { Component } from "react";
import employees from "./employees.json";
import "./style.css";

class EmployeeList extends Component {
  state = {
    employees
  };

  render() {
    return (
      <div className="container">
        <div className="content">
          <p>In Employee List</p>
        </div>
      </div>
    )

  }

}

export default EmployeeList;
