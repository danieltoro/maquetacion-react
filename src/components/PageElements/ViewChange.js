import React from 'react';

const ViewChange = () => {
    return (
        <div className="list-view-change">
            <div className="change-grid color-1 fr"><i className="fa fa-th"/></div>
            <div className="change-list color-1 fr active"><i className="fa fa-bars"/></div>
            <div className="change-to-label fr color-grey-8">View:</div>
        </div>
    );
};

export default ViewChange;