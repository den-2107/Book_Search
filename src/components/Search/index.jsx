import React from "react";
import styled from "styled-components";
import "./index.css";

const SearchBox = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    margin: 32px;

`;

const SearchBar = styled.form `
    margin: 8px;
    font-size: 24px;
`;

const SearchButton = styled.button `
    margin: 8px;
    font-size: 24px;
    cursor: pointer;
    font-family: cursive;
    font-weight: lighter;
    border-radius: 16px;
    border: none;
    box-shadow: 0px 0px 41px -6px rgba(34, 60, 80, 0.17);
    background-color: #D6F1DE;

`;

const Search = (props) => {

    return (
        <SearchBox>
            <SearchBar onSubmit={props.bookRequest} action="">
                <input className="inputSearchBar" onChange={props.handleSearch} placeholder="Введите запрос..." type="search"/>
                <SearchButton className="buttonSearch" type="submit">Найти</SearchButton>
                <select className="selected" defaultValue="Sort" onChange={props.handleSort}>
                    <option className="optionSelected" disabled value="Actual">Все</option>
                    <option className="optionSelected" value="New">Новее</option>
                    <option className="optionSelected" value="Old">Старее</option>
                </select>
            </SearchBar>
        </SearchBox>
    );
};

export default Search;