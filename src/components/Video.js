import React, { Component } from 'react';
import './../styles/Video.css';
import uuidv1 from 'uuid/v1';

class Video extends Component {
    state = {
        APP_ID: null,
        CHANNEL_ID: null,
        meetingTime: null,
        isMeetingTime: false
    }

    componentWillMount () {
        this.getVideoCallIds ();
    }

    // Get the IDS
    getVideoCallIds = () => {
        // Replace by code to get the App Id and channel Id from backend
        const channelId = uuidv1();
        // set meeting time to time from smart contract (for now I am setting it as Date.now())
        const meetingTime = Date.now();
        this.setState = {
            ...this.state,
            APP_ID: "ea9e6efd85324f208433a4b855fcef90",
            CHANNEL_ID: channelId,
            meetingTime
        };

        this.checkIsMeetingTime ();
    }

    checkIsMeetingTime = () => {
        if (Date.now() < this.state.meetingTime) {
            // Handle Meeting not started case
            return false;
        }

        this.setState ({
            ...this.state,
            isMeetingTime: true
        });
    }

    // Check whether it is meeting time

    render () {
        return (
            <div className="App">
                This is Video.js
            </div>
        );
    }
}

export default Video;
