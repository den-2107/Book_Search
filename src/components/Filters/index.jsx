import React from 'react';
import MaxResults from '../MaxResults';
import OrderBy from '../OrderBy';
import Filter from '../Filter';
import './index.css';

const Filters = (props) => {
    return (
        <div className= "filters">
            <MaxResults handleMaxResults={props.handleMaxResults}/>
            <Filter handleFilter={props.handleFilter}/>
            <OrderBy handleOrderBy={props.handleOrderBy}/>
        </div>
    );
};

export default Filters;