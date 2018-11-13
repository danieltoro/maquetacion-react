import React, {Component} from 'react';

import InnerBanner from '../../components/InnerBanners/InnerBanner01';
import ListItem from '../../components/ListItems/ListItem01';

import Pagination from '../../components/Pagination/Pagination01';

import Sidebar from './Sidebar';
import ViewChange from '../../components/PageElements/ViewChange';
import ListSort from '../../components/PageElements/ListSort';

class Hotels extends Component {
    render() {
        return (
            <div>
                <InnerBanner/>
                <div className="list-wrapper bg-grey-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-4 col-md-3">
                                <Sidebar/>
                            </div>
                            <div className="col-xs-12 col-sm-8 col-md-9">
                                <div className="list-header clearfix">
                                    <ListSort/>
                                    <ListSort/>
                                    <ViewChange/>
                                </div>
                                <div className="list-content clearfix">
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                    <ListItem/>
                                </div>

                                <Pagination/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hotels;