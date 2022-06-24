import React, { Component } from "react";
import Search from "../Search";
import request from "superagent";
import BookList from "../BookList";


class Books extends Component {
    constructor(props) {
        super(props);
        this.state ={
            books: [],
            searchField: '',
            key: "AIzaSyBhG8KpY5Qt_hpaFtYmQvv20e3QCyu8GrY",
        };
    };

    handleSearch = (e) => {
            this.setState({ searchField: e.target.value })
        }

    bookRequest = (e) => {
        e.preventDefault();
        request
            .get(`https://www.googleapis.com/books/v1/volumes?`)
            .query({q: this.searchField + this.key})
            // .query({q: this.searchField})
            .then((data) => {
                console.log(data)
                this.setState({ books: [...data.body.items]})
            })
            console.log(this.searchField);
            console.log(e.target.value);

    }

    

    render() {
        return (
        <>
        <Search bookRequest = {this.bookRequest} handleSearch = {this.handleSearch} />
        <BookList books={this.state.books}/>
        </>
        
    );
    };
};

export default Books;