import React from 'react';
import styled from 'styled-components';

const CardInfo = styled.div `

`;

const Card = (props) => {
    return (
       <CardInfo>
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <h3>{props.categories}</h3>
        <p>{props.public}</p>

       </CardInfo> 
    );
};

export default Card;