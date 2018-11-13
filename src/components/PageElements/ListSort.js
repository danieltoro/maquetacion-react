import React from 'react';

const ListSort = () => {
    return (
        <div className="drop-wrap drop-wrap-s-4 color-4 list-sort">
            <div className="drop">
                <b>Sort by price</b>
                <a href="#" className="drop-list"><i className="fa fa-angle-down"/></a>
                <span>
                    <a href="#">ASC</a>
                    <a href="#">DESC</a>
                </span>
            </div>
        </div>
    );
};

export default ListSort;