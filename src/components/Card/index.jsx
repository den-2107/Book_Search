import React from 'react';
import styled from 'styled-components';
import "./index.css";

const CardInfo = styled.div `
    background-color: #D6F1DE;
    justify-content: space-around;
    width: 400px;
    flex-flow: column nowrap;
    border-radius: 16px;
    height: 400px;
    box-shadow: "0px 0px 21px 0px rgba(34, 60, 80, 0.2)";
    gap: 0px;
    cursor: pointer;

`;
const Card = (props) => {
    return (
       <CardInfo className='CardInfoHover'  style={{direction:"column", alignItems:"center", justifyContent:"center",padding: "0px",boxShadow: "0px 0px 21px 0px rgba(34, 60, 80, 0.2)"}}>
        <div>
            <img style={{boxShadow: "0px 0px 21px 0px rgba(34, 60, 80, 0.2)" ,borderRadius: "16px",margin: "4px", height: "220px", width: "140px"}} src={props.image} alt="" />
        </div>
        <div style={{marginLeft: "4px"}}>
            <p
            style={{
                marginTop: "8px",
                fontSize: "16px",
                fontWeight: "bold",
            }}
            >{"Автор: "}{props.author}</p>
            <p
            style={{
                marginTop: "8px",
                overflow: "scroll", 
                height: "32px", 
                width: "calc(100% - 32px)", 
                wrap: "wrap",
                overflowX: "hidden",
                overflowY: "auto"
              }}
            >{`"`}{props.title}{`"`}</p>
            <p
            style={{
                marginTop: "8px",
            }}
            >{"Категория - "}{props.categories}</p>
            <p
            style={{
                marginTop: "8px",
            }}
            >{"Опубликована: "}{props.public === '0000' ? 'Нет даты' : props.public.substring(0, 4)}{' г.'}</p>
        </div>
       </CardInfo> 
    );
};

export default Card;