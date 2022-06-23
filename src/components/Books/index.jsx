import React, { Component } from "react";
import Search from "../Search";
import request from "superagent";


class Books extends Component {
    constructor(props) {
        super(props);
        this.state ={
            books: [],
            searchField: '',
            key: "AIzaSyBhG8KpY5Qt_hpaFtYmQvv20e3QCyu8GrY",
        };
    };



    bookRequest = (e) => {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({q: this.searchField + this.key})
            .then((data) => {
                console.log(data)
            })
    }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        return (
        <Search bookRequest = {this.bookRequest} handleSearch = {this.handleSearch} />
    );
    };
};

export default Books;