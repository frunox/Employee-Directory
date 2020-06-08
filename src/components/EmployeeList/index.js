// Component to render that list of employees
import React from "react";
import "./EmployeeList.css";

// users (prop from TableBody via EmployeeTable) is //  the array of employee data
function EmployeeList({ users }) {
    // console.log('user1: ', users[0])
    // split the date field and assign variables for year, month and day to format DOB as formattedDate
    function formatDate(date) {
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("-");
        return formattedDate;
    }
    // render the list of employees.  Set a  unique key (login.uuid) from data as provided
    // add 'mailto:' functionality to the emails 
    return (
        <tbody>
            {users[0] !== undefined && users[0].name !== undefined ? (
                users.map(({ login, name, picture, phone, email, dob }) => {
                    return (
                        <tr key={login.uuid}>
                            <td data-th="Image" className="align-middle">
                                <img
                                    src={picture.medium}
                                    alt={"profile image for " + name.first + " " + name.last}
                                    className="img-responsive"
                                />
                            </td>
                            <td data-th="Name" className="name-cell align-middle">
                                {name.first} {name.last}
                            </td>
                            <td data-th="Phone" className="align-middle">
                                {phone}
                            </td>
                            <td data-th="Email" className="align-middle">
                                <a href={"mailto:" + email} target="__blank">
                                    {email}
                                </a>
                            </td>
                            <td data-th="DOB" className="align-middle">
                                {formatDate(dob.date)}
                            </td>
                        </tr>
                    );
                })
            ) : (
                    <></>
                )}
        </tbody>
    );
}

export default EmployeeList;
