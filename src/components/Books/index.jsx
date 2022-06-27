import React, { Component } from 'react';
import Search from '../Search';
import request from 'superagent';
import BookList from '../BookList';
import Filters from '../Filters';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state ={
            books: [],
            searchField: '',
            key: "AIzaSyBhG8KpY5Qt_hpaFtYmQvv20e3QCyu8GrY",
            maxResults: 10,
            filter: "full",
            orderBy: "relevance",
            dowload: "dowload",
            categories: "categories"
        };
    };

    request = () => {
        if (this.state.searchField === '') return;

        request
            .get(`https://www.googleapis.com/books/v1/volumes?`)
            .query({
                q: this.state.searchField, 
                maxResults: this.state.maxResults,
                filter: this.state.filter, 
                orderBy: this.state.orderBy 
            })
            .then((data) => {
                const editData = this.editData(data)
                this.setState({ books: editData})
                console.log(data)
            })
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
        this.request();
    }

    handleMaxResults = (e) => this.setState({ maxResults: e.target.value }, () => this.request());
    handleOrderBy = (e) => this.setState({ orderBy: e.target.value }, () => this.request());
    handleFilter = (e) => this.setState({ filter: e.target.value }, this.request());
    handleSearch = (e) => this.setState({ searchField: e.target.value });

    render() {
        return (
            <>
                <Search bookRequest = {this.bookRequest} handleSearch = {this.handleSearch} />
                <Filters handleMaxResults={this.handleMaxResults} handleOrderBy={this.handleOrderBy} handleFilter={this.handleFilter}/>
                <BookList books={this.state.books}/>
            </>        
        );
    };
};

export default Books;