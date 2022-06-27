import React from 'react';
import Card from '../Card';
import './index.css';

const BookList = (props) => {
    return (
        <div className= 'container'>
            {
                props.books.map((book, i) => {
                    return <Card 
                    key={i}
                    image={book.volumeInfo.imageLinks?.thumbnail}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    public={book.volumeInfo.publishedDate}
                    categories={book.volumeInfo.categories}
                    />
                })
            }
        </div>
    );
};

export default BookList;