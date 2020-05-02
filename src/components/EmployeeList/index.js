import React, { Component } from "react";
import EmployeeTable from "../EmployeeTable";
import employees from "./employees.json";
class EmployeeList extends Component {
  state = {
    employees
  };

  render() {
    return (
      <table className="content">
        <thead className="tableHeader">
          <tr>
            <th className="col1">Image</th>
            <th className="col2">Name</th>
            <th className="col3">Phone</th>
            <th className="col4">email</th>
            <th className="col5">DOB</th>
          </tr>
        </thead>
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
      </table>
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
