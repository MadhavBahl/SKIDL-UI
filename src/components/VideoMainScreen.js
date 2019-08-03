import React, { Component } from 'react';
import './../styles/Video.css';
import AgoraRTC from 'agora-rtc-sdk';

class VideoMainScreen extends Component {
    componentDidMount () {
        this.joinVideoCall ();
    }

    joinVideoCall = () => {
        if(!AgoraRTC.checkSystemRequirements()) {
            alert("browser does not support webRTC");
        }

        let client = AgoraRTC.createClient({mode: 'live', codec: "h264"});
        var channel_key = null;

        // client.init(this.props.appId, function () {
        //     console.log("AgoraRTC client initialized");

        //     /* simulated data to proof setLogLevel() */
        //     AgoraRTC.Logger.error('this is error');
        //     AgoraRTC.Logger.warning('this is warning');
        //     AgoraRTC.Logger.info('this is info');
        //     AgoraRTC.Logger.debug('this is debug');

        //     var client, localStream, camera, microphone;

        //     client.join(channel_key, channel.value, null, function(uid) {
        //         console.log("User " + uid + " join channel successfully");
          
        //         camera = videoSource.value;
        //         microphone = audioSource.value;
        //         localStream = AgoraRTC.createStream({streamID: uid, audio: true, cameraId: camera, microphoneId: microphone, video: true, screen: false});
        //         //localStream = AgoraRTC.createStream({streamID: uid, audio: false, cameraId: camera, microphoneId: microphone, video: false, screen: true, extensionId: 'minllpmhdgpndnkomcoccfekfegnlikg'});
        //         if (document.getElementById("video").checked) {
        //           localStream.setVideoProfile('720p_3');
          
        //         }
          
        //         // The user has granted access to the camera and mic.
        //         localStream.on("accessAllowed", function() {
        //           console.log("accessAllowed");
        //         });
          
        //         // The user has denied access to the camera and mic.
        //         localStream.on("accessDenied", function() {
        //           console.log("accessDenied");
        //         });
          
        //         localStream.init(function() {
        //           console.log("getUserMedia successfully");
        //           localStream.play('agora_local');
          
        //           client.publish(localStream, function (err) {
        //             console.log("Publish local stream error: " + err);
        //           });
          
        //           client.on('stream-published', function (evt) {
        //             console.log("Publish local stream successfully");
        //           });
        //         }, function (err) {
        //           console.log("getUserMedia failed", err);
        //         });
        //       }, function(err) {
        //         console.log("Join channel failed", err);
        //       });

        // }, function (err) {
        //     console.log("AgoraRTC client init failed", err);
        // });

    }

    render () {
        return (
            <div className="video-mainscreen-container">
                <div style={{display: "none"}} id="div_device" className="panel panel-default">
                    <div className="select">
                        <label for="audioSource">Audio source: </label><select id="audioSource"></select>
                    </div>
                    <div className="select">
                        <label for="videoSource">Video source: </label><select id="videoSource"></select>
                    </div>
                </div>

                <div className="row">
                    <div id="video" className="col s12">
                        <div id="agora_local"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoMainScreen;