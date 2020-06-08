import React, { Component } from 'react';
import "./Banner.css";

export default class Banner extends Component {
    render() {
        return (
            <div className="header">
                <h1>Employee Directory</h1>
                <p className="desc">Click on the column names to sort or use the search box to narrow your results.</p>
            </div>
        )
    }
}