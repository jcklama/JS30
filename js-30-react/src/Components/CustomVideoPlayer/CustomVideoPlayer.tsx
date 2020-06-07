import React, { RefObject, SyntheticEvent } from 'react';

export interface Props {}
export interface State {
    paused: boolean | null;
}

export default class CustomVideoPlayer extends React.Component<Props, State > {

    constructor(props: Props) {
        super(props);
        this.playOrPause = this.playOrPause.bind(this);
        this.updateSeekBar = this.updateSeekBar.bind(this);
        this.changeRange = this.changeRange.bind(this);
        this.seek = this.seek.bind(this);
        this.skip = this.skip.bind(this);
        this.state = {
            paused: true,
        }
    }

    video: RefObject<HTMLVideoElement> = React.createRef();
    progress: RefObject<HTMLProgressElement> = React.createRef();
    play: RefObject<HTMLButtonElement> = React.createRef();
    volume: RefObject<HTMLInputElement> = React.createRef();
    playback: RefObject<HTMLInputElement>  = React.createRef();
    skipBack: RefObject<HTMLDivElement> = React.createRef();
    skipForward: RefObject<HTMLDivElement> = React.createRef();
    
    updateSeekBar() {
        const video: HTMLVideoElement | null = this.video.current;
        const progress: HTMLProgressElement | null = this.progress.current;
        if (video && progress) {
            video.currentTime === video.duration ? 
                this.setState({ paused: true }) : progress.value = video.currentTime / video.duration * 100 + 0.009;
        }
    }
    
    seek(e: SyntheticEvent) {
        const p: HTMLProgressElement | null = this.progress.current;
        const v: HTMLVideoElement | null = this.video.current;
        const event: MouseEvent = e.nativeEvent as MouseEvent;

        if (p && v) {
            const seekBarWidth: number | undefined = p.clientWidth;
            const leftOffset: number | undefined = p.getBoundingClientRect().left;
            const xClicked = event.clientX - leftOffset;
            
            const proportion: number = xClicked / seekBarWidth
            p.value = proportion * 100
            v.currentTime = proportion * v.duration + 0.009;
        }
    }
    
    playOrPause() {
        const video: HTMLVideoElement | null = this.video.current
        if (video) {
            if (video.paused) { video.play() } 
            else { video.pause(); }
            this.setState({ paused: video.paused }) 
        }
    }

    changeRange(type: string) {
        const video: HTMLVideoElement | null = this.video.current;
        
        if (type === "volume") {
            const vol: HTMLInputElement | null = this.volume.current;
            if (video && vol) {
                video.volume = parseInt(vol.value) / 100;
                vol.classList.add('dirty');
            }
        } else if (type === "playBack") {
            const playBack: HTMLInputElement | null = this.playback.current;
            if (video && playBack) { 
                video.playbackRate = parseInt(playBack.value);
                playBack.classList.add('dirty');
            }
        }
    }

    skip(direction: string) {
        const video: HTMLVideoElement | null = this.video.current;
        const progress: HTMLProgressElement | null = this.progress.current;
        if (video && progress) {
            if (direction === "back") {
                video.currentTime -= 10
            } else {
                if (video.currentTime + 25 > video.duration) {
                    video.currentTime = video.duration 
                    progress.value = 100
                } else {
                    video.currentTime += 25;
                    progress.value = video.currentTime / video.duration * 100;
                }
            }
        }
    }
    
    render() {
        return (
            <div className="custom-video-player">
                <div className="video-wrapper">
                    <video ref={this.video} width="600" height="450" src={require('./video.mp4')} onTimeUpdate={this.updateSeekBar} onClick={this.playOrPause}>
                        Your browser doesn't support the video tag.
                    </video>
                    <progress max="100" ref={this.progress} onClick={this.seek}></progress>
                    <div className="video-controls">
                        <button ref={this.play} onClick={this.playOrPause} className="play-button">
                            {this.state.paused ?
                            <span role="img" aria-label="play" className="play">▶️</span> :
                            <span role="img" aria-label="pause" className="pause">❚ ❚</span>}
                        </button>
                        <input ref={this.volume} onChange={() => {this.changeRange('volume')}} type="range" className="volume" min="0" max="100"/>
                        <input ref={this.playback} onChange={() => {this.changeRange('playBack')}} type="range" className="playback-speed" min="0.5" max="16" defaultValue="1"/>
                        <div ref={this.skipBack} onClick={() => {this.skip("back")}} className="skips"><span>↞</span>{"10s"}</div>
                        <div ref={this.skipForward} onClick={() => {this.skip("forward")}} className="skips">25s <span>↠</span></div>
                    </div>
                </div>
            </div>
        )
    }
}