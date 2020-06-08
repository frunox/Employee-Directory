import React from "react";
import SearchBox from "../SearchBox";
import "./SearchBar.css";

// accepts prop handleSearchChange from TableBody
// renders SearchBox and passes prop handleSearchChange
function SearchBar({ handleSearchChange }) {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="navbar-collapse row" id="navbarNav">
                <SearchBox handleSearchChange={handleSearchChange} />
            </div>
        </nav>
    );
}
export default SearchBar;
