import React from "react";
import "./style.css";

function List(props) {
    return (
        <div className="list">
            <div className="content">
                <ul>
                    <li>
                        {props.name}
                    </li>
                    <li>
                        <strong>Occupation:</strong> {props.occupation}
                    </li>
                    <li>
                        <strong>Location:</strong> {props.location}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default List;