import React from 'react';
import './index.css';

const Card = (props) => {
    return (
       <div className='cardInfo'>
        <div>
            <img style={{boxShadow: "0px 0px 21px 0px rgba(34, 60, 80, 0.2)" ,borderRadius: "16px",margin: "4px", height: "220px", width: "140px"}} src={props.image} alt="" />
        </div>
        <div style={{marginLeft: "4px"}}>
            <p
            style={{
                marginTop: "4px",
                fontSize: "16px",
                fontWeight: "bold",
                overflow: "scroll", 
                height: "32px", 
                width: "calc(100% - 32px)", 
                wrap: "wrap",
                overflowX: "hidden",
                overflowY: "auto"
            }}
            >{"Автор: "}{props.author}</p>
            <p
            style={{
                marginTop: "4px",
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
                marginTop: "4px",
            }}
            >{"Категория - "}{props.categories}</p>
            <p
            style={{
                marginTop: "4px",
            }}
            >{"Опубликована: "}{props.public === '0000' ? 'Нет даты' : props.public.substring(0, 4)}</p>
            <p>
                <a href={props.dowloadPDF} target= "_blanc">Читать PDF</a>
            </p>
            <p>
                <a href={props.dowloadEPUB} target= "_blanc">Читать EPUB</a>
            </p>
        </div>
       </div> 
    );
};

export default Card;