/* eslint-disable array-callback-return */
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
            sort: '',
        };
    };

    handleSearch = (e) => {
            this.setState({ searchField: e.target.value })
        }

    handleSort = (e) => {
        this.setState({ sort: e.target.value })
    }

    editData = (data) => {
        const editedData = data.body.items.map((book) => {
            if (book.volumeInfo.hasOwnProperty('publishedDate') === false) {
                book.volumeInfo['publishedDate'] = '0000';
            }

            else if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
                book.volumeInfo['imageLinks'] = { thumbnail: 'http://binibambini.app.artjoker.ua/wp-content/uploads/2020/08/no-image.jpg'}
            }

            return book;
        })

        return editedData;
    }

    bookRequest = (e) => {
        e.preventDefault();
        request
            .get(`https://www.googleapis.com/books/v1/volumes?`)
            .query({q: this.state.searchField, maxResults: 40 })
            .then((data) => {
                const editData = this.editData(data)
                this.setState({ books: editData})
                console.log(data)
            })

    }

    

    render() {
        const BooksSort = this.state.books.sort((a, b)=> {
            if (this.state.sort === 'New') {
                return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4));
            }
            else if (this.state.sort === 'Old') {
                return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4));
            }
        })
        
        return (
        <>
        <Search bookRequest = {this.bookRequest} handleSearch = {this.handleSearch} handle = {this.handleSort} />
        <BookList books={BooksSort}/>
        </>
        
    );
    };
};



export default Books;