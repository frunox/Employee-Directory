import React from "react";
import "./style.css";

function EmployeeTable(props) {
    return (
        <div className="table">
            <table className="content" id="empTable">
                {/* <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>email</th>
                        <th>DOB</th>
                    </tr>
                </thead> */}
                <tbody className="tableBody">
                    <tr>
                        <td className="col1"><img src={props.image} alt={props.firstName} /></td>
                        <td className="align-middle col2">{props.firstName} {props.lastName}</td>
                        <td className="align-middle col3">{props.phone}</td>
                        <td className="align-middle col4">{props.email}</td>
                        <td className="align-middle col5">{props.dob}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
}

export default EmployeeTable;