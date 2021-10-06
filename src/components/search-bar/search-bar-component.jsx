import React, { useState } from "react";

import './search-bar-styles.scss';

const SearchBar = (props) => {

    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <form >
            <input
                className='search'
                value={searchValue}
                placeholder={"Search Artist"}
                onChange={handleSearchInputChanges}
                type="text"
            />

            <input className='searchButton' onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
    );
}

export default SearchBar