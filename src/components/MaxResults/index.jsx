import React from 'react';

const MaxResults = (props) => {
    return (
        <select className="selected" defaultValue="10" onChange={props.handleMaxResults}>
            <option className="optionSelected" value="10">10</option>
            <option className="optionSelected" value="20">20</option>
            <option className="optionSelected" value="30">30</option>
            <option className="optionSelected" value="40">40</option>
        </select>
    );
};

export default MaxResults;