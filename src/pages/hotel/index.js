import React, {Component} from 'react';

import HeaderDetails from '../../components/Details/HeaderDetails';
import Galery from '../../components/Galery/Galery01';

import InnerBanner from '../../components/InnerBanners/InnerBanner02';
import ListItem from '../../components/ListItems/ListItem05';
import Accordion from '../../components/Acordions/Accordion02';

import Details from '../../components/Details/Details01';
import PopularTours from '../../components/PopularTours/PopularTours';
import NeedHelp from '../../components/NeedHelp/NeedHelp';

class Index extends Component {
    render() {
        return (
            <div>
                <InnerBanner/>

                <div className="detail-wrapper">
                    <div className="container">
                        <HeaderDetails/>
                        <div className="row padd-90">
                            <div className="col-xs-12 col-md-8">
                                <div className="detail-content color-1">
                                    <Galery/>

                                    <div className="detail-content-block">
                                        <h3>General Information About tour</h3>
                                        <p>Pellentesque ac turpis egestas, varius justo et, condimentum augue. Praesent
                                            aliquam, nisl feugiat vehicula condimentum, justo tellus scelerisque metus.
                                            Pellentesque ac turpis egestas, varius justo et, condimentum augue. Lorem
                                            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua.</p>

                                        <h5>interesting for you</h5>

                                        <div className="embed-responsive embed-responsive-16by9">
                                        <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/64473966?color=dedede&amp;title=0&amp;byline=0&amp;portrait=0" />
                                        </div>
                                    </div>
                                    <div className="detail-content-block">
                                        <h3>If You Have Any Questions</h3>
                                        <div className="accordion style-2">
                                            <Accordion/>
                                            <Accordion/>
                                            <Accordion/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <div className="right-sidebar">

                                    <Details/>
                                    <PopularTours/>

                                    <div className="sidebar-text-label bg-dr-blue color-white">useful information</div>

                                    <NeedHelp/>
                                </div>
                            </div>
                        </div>
                        <div className="may-interested padd-90">
                            <div className="row">
                                <div className="col-mob-12 col-xs-6 col-sm-6 col-md-3">
                                    <ListItem/>
                                </div>
                                <div className="col-mob-12 col-xs-6 col-sm-6 col-md-3">
                                    <ListItem/>
                                </div>
                                <div className="col-mob-12 col-xs-6 col-sm-6 col-md-3">
                                    <ListItem/>
                                </div>
                                <div className="col-mob-12 col-xs-6 col-sm-6 col-md-3">
                                    <ListItem/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;