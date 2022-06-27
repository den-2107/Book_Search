import React from 'react';

const FilterByCategory = (props) => {
    return (
        <select className="selected" defaultValue="all" onChange={props.handleFilter}>
            <option className="optionSelected" value="all">all</option>
            <option className="optionSelected" value="art">art</option>
            <option className="optionSelected" value="biography">biography</option>
            <option className="optionSelected" value="computers">computers</option>
            <option className="optionSelected" value="history">history</option>
            <option className="optionSelected" value="medical">medical</option>
            <option className="optionSelected" value="poetry">poetry</option>
        </select>
    );
};

export default FilterByCategory;