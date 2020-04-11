import React from 'react';
import Video from "./video.mp4";

export default class CustomVideoPlayer extends React.Component {

    render() {
        return (
            <div className="custom-video-player">
                <video controls width="600" height="400" src={Video}>
                </video>
            </div>
        )
    }
}