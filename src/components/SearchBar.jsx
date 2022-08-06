import React from 'react';

import search from '../icons/search.png';
const SearchBar = () => {
    return (
        <div className="searchBox">
            <img className="searchIcon" src={search} alt="" />
            <input type="text" placeholder="Search" className="searchInput" />
        </div>
    );
};

export default SearchBar;
