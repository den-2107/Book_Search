import React from 'react';

const FilterTypeOfBooks = (props) => {
    return (
        <select className="selected" defaultValue="full" onChange={props.handleFilter}>
            <option className="optionSelected" value="full">full</option>
            <option className="optionSelected" value="ebooks">ebooks</option>
            <option className="optionSelected" value="free-ebooks">free-ebooks</option>
            <option className="optionSelected" value="paid-ebooks">paid-ebooks</option>
            <option className="optionSelected" value="partial">partial</option>
        </select>
    );
};

export default FilterTypeOfBooks;