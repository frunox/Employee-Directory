import React, { Component } from "react";
import EmployeeTable from "../EmployeeTable";
import employees from "./employees.json";
import "./style.css";
console.log(employees)
console.log(employees.results[0].name.first)
console.log(employees.results[0].name.last)
console.log(employees.results[0].dob.date)
console.log(employees.results[0].email)
console.log(employees.results[0].cell)
console.log(employees.results[0].picture.thumbnail)
class EmployeeList extends Component {
  state = {
    employees
  };

  render() {
    return (
      <div className="container">
        <div className="content">
          <p>In Employee List</p>
          {/* <img src={employees.results[0].picture.thumbnail} width="150" height="150" alt={employees.results[0].name.first} /> */}
          <EmployeeTable
            image={employees.results[0].picture.thumbnail}
            firstName={employees.results[0].name.first}
            phone={employees.results[0].cell}
            email={employees.results[0].email}
            dob={employees.results[0].dob.date}
          />
        </div>
      </div>
    )

  }

}

export default EmployeeList;
