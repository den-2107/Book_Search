import React from 'react';
import MaxResults from '../MaxResults';
import OrderBy from '../OrderBy';
import FilterTypeOfBooks from '../FilterTypeOfBooks';
// import FilterByCategory from '../FilterByCategory';
import './index.css';

const Filters = (props) => {
    return (
        <div className= "filters">
            <MaxResults handleMaxResults={props.handleMaxResults}/>
            <FilterTypeOfBooks handleFilter={props.handleFilter}/>
            {/* <FilterByCategory handleFilter={props.categories} /> */}
            <OrderBy handleOrderBy={props.handleOrderBy}/>
        </div>
    );
};
export default Filters;