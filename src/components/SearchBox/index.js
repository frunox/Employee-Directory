import React from "react";
import "./SearchBox.css";

// receives prop handleSearchChange (from TableBody via SearchBar)
// renders the search input box
function SearchBox({ handleSearchChange }) {
    return (
        <div className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e => handleSearchChange(e)}
                />
            </form>
        </div>
    );
}
export default SearchBox;
