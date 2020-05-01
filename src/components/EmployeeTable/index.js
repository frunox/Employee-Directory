import React from "react";
// import "./style.css";

function EmployeeTable(props) {
    return (
        <div className="table">
            <table className="content">
                {/* <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>email</th>
                        <th>DOB</th>
                    </tr>
                </thead> */}
                <tbody>
                    <tr>
                        <td><img src={props.image} alt={props.firstName} /></td>
                        <td>{props.firstName} {props.lastName}</td>
                        <td>{props.phone}</td>
                        <td>{props.email}</td>
                        <td>{props.dob}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
}

export default EmployeeTable;