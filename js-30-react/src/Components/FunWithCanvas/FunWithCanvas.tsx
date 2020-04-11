import React, { RefObject, SyntheticEvent } from 'react';

export interface Props {}

export interface State {
    prevPos: Position;
    currPos: Position;
}

export interface Position {
    x: number;
    y: number;
}

export default class FunWithCanvas extends React.Component<Props, State> { 

    constructor(props: Props) {
        super(props);
        this.state = {
            prevPos: { x: 0, y: 0},
            currPos: { x: 0, y: 0}
        }
        this.getPosition = this.getPosition.bind(this);
        this.mouseUpHandler = this.mouseUpHandler.bind(this);
        this.mouseDownHandler = this.mouseDownHandler.bind(this);
    }
    
    canvas: RefObject<HTMLCanvasElement> = React.createRef();
    ctx: CanvasRenderingContext2D | undefined | null;
    clicked: boolean = false;

    componentDidMount() {
        if (this.canvas.current) {
            this.canvas.current.height = window.innerHeight;
            this.canvas.current.width = window.innerWidth;
        }
    }

    getPosition(e: SyntheticEvent) {
        let event: MouseEvent = e.nativeEvent as MouseEvent;
        const currPos: Position = {
            x: event.clientX,
            y: event.clientY
        }
        this.setState({ currPos });
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        if (prevState.currPos.x !== this.state.currPos.x || prevState.currPos.y !== this.state.currPos.y ) {
            this.draw();
        }
    }

    // draw not called when click event happends
    draw() {
        this.ctx = this.canvas.current?.getContext('2d');
        
        // set prevPos to currPos and draw in same 'step'
        if (this.ctx && this.clicked) {
        
            this.ctx.lineCap = 'round';
            this.ctx.lineWidth = 15;
            this.ctx.strokeStyle = `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
            this.ctx.beginPath();
            this.ctx.moveTo(this.state.prevPos.x, this.state.prevPos.y);
            this.ctx.lineTo(this.state.currPos.x, this.state.currPos.y);
            this.ctx.stroke();

            const { currPos }: State = this.state;
            this.setState({ prevPos: currPos });

        } else if (this.ctx && !this.clicked) {
            
        }
    }

    mouseDownHandler(e: SyntheticEvent) {
        let event: MouseEvent = e.nativeEvent as MouseEvent;
        const prevPos: Position = {
            x: event.clientX,
            y: event.clientY
        }
        this.setState({ prevPos });
        this.clicked = true;
    }

    mouseUpHandler() {
        this.clicked = false;
    }

    render() {
        return (
            <canvas className="canvas-fun" 
                ref={this.canvas} 
                onMouseMove={this.getPosition} 
                onMouseDown={this.mouseDownHandler}
                onMouseUp={this.mouseUpHandler}
            />
        )
    }
}