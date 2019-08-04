import React, { Component } from 'react';
import FeedSidePane from './FeedSidePane';
import './../styles/Feed.css';

class Feed extends Component {
    state = {
        name: "James Bond",
        rating: "4.5",
        skill1: "Node", 
        skill2: "C++",
        skill3: "Python",
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat."
    }

    render () {
        return (
            <div className="feed-super-container">
                <div className="row">
                    <div className="zero-pad col s12 m3">
                        
                            <FeedSidePane
                                name={this.state.name}
                                rating={this.state.rating}
                                skill1={this.state.skill1}
                                skill2={this.state.skill2}
                                skill3={this.state.skill3}
                                about={this.state.about}
                            />
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Feed;
