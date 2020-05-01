import React, { Component } from "react";
import EmployeeTable from "../EmployeeTable";
import employees from "./employees.json";
import "./style.css";
// console.log(employees)
console.log(employees.results[0].id.value)
// console.log(employees.results[0].name.last)
// console.log(employees.results[0].dob.date)
// console.log(employees.results[0].email)
// console.log(employees.results[0].cell)
// console.log(employees.results[0].picture.thumbnail)
class EmployeeList extends Component {
  state = {
    employees
  };

  render() {
    return (
      <div className="container">
        <div className="content">
          {this.state.employees.results.map(employee =>
            // console.log(employee.cell);
            < EmployeeTable
              image={employee.picture.thumbnail}
              firstName={employee.name.first}
              lastName={employee.name.last}
              phone={employee.cell}
              email={employee.email}
              dob={employee.dob.date}
              id={employee.id.value}
            />
          )}
        </div>
      </div>
    )

  }

}

// image = { employees.results[0].picture.thumbnail }
// firstName = { employees.results[0].name.first }
// lastName = { employees.results[0].name.last }
// phone = { employees.results[0].cell }
// email = { employees.results[0].email }
// dob = { employees.results[0].dob.date }

export default EmployeeList;
