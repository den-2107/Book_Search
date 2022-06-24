import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

const Container = styled.div `

`;

const BookList = (props) => {
    return (
        <Container>
            {
                props.books.map((book, i) => {
                    return <Card
                    key={i}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    public={book.volumeInfo.publishedDate}
                    categories={book.volumeInfo.categories}
                    />
                   
                })
            }
        </Container>
    );
};

export default BookList;