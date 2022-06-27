import React from 'react';

const OrderBy = (props) => {
    return (
        <select className="selected" defaultValue="relevance" onChange={props.handleOrderBy}>
            <option className="optionSelected" value="relevance">relevance</option>
            <option className="optionSelected" value="newest">newest</option>
        </select>
    );
};

export default OrderBy;