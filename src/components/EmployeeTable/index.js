import React from "react";
import EmployeeList from "../EmployeeList";
import "./EmployeeTable.css";

function EmployeeTable({ headings, users, handleSort }) {
    return (
        <div className="datatable fixHeader">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {headings.map(({ name, width }) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        handleSort(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                    <span className={(name !== "Image" ? "pointer" : "null")}></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <EmployeeList users={users} />
            </table>
        </div>
    );
}

export default EmployeeTable;
