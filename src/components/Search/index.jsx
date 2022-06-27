import React from "react";
import "./index.css";

const Search = (props) => {

    return (
        <div className= "searchBox" >
            <form className=" searchBar"  onSubmit={props.bookRequest} action="">
                <input className="inputSearchBar" onChange={props.handleSearch} placeholder="Введите запрос..." type="search"/>
                <button className= "searchButton" type="submit">Найти</button>
            </form>
        </div>
    );
};

export default Search;