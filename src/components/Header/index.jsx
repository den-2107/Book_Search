import React from 'react';
import styled from 'styled-components';
import book from './img/book.png';


const Heading = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    margin: 8px;
    padding: 8px;
    font-size: 32px;
    font-family: cursive;
    font-weight: lighter;
    background-color: #D6F1DE;
    border-radius: 16px;
    box-shadow: 0px 0px 41px -6px rgba(34, 60, 80, 0.17);
`;

const Img = styled.img `

`;

const Header = () => {
    return (
        <Heading>
            <>
                <Img src={book} />
            </>
            Book_Search
        </Heading>
    );
};

export default Header;