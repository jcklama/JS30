import React, { RefObject, SyntheticEvent } from 'react';
import god1 from './god-1.jpg';
import god2 from './god-2.jpg';
import god3 from './god-3.jpg';
import god4 from './god-4.jpg';

export interface Props {}
export interface State {
    characters: string[]
}

export default class KeySequence extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            characters: []
        }
        this.keyDownHandler = this.keyDownHandler.bind(this);
    }

    componentArea: RefObject<HTMLDivElement> = React.createRef();
    addImage: boolean = false;
    images: string[] = [god1, god2, god3, god4];
    generatedImages: string[] = [];

    componentDidMount() {
        this.componentArea.current?.focus();
        console.log('Answer is %cwelkin', 'color:tomato;font-weight:600')
    }

    keyDownHandler(e: SyntheticEvent) {
        const event: KeyboardEvent = e.nativeEvent as KeyboardEvent;
        
        let characters: string[] = [...this.state.characters]
        
        if (characters.length > 5) characters.shift();
        characters.push(event.key);
        
        this.setState({ characters });

        if (/welkin/i.test(characters.join(''))) {
            console.log('DING DING!');
            this.addPicture();
        }
    }

    addPicture() {
        this.generatedImages.push(this.images[Math.floor(Math.random() * 4)]);
    }
    
    render() {
        return(
            <div tabIndex={0} className="key-sequence" ref={this.componentArea} onKeyDown={this.keyDownHandler}>
                <div className="wrapper">
                    <p>To the screen your keys will be bind</p>
                    <p>A prize awaits the word you find</p>
                    <p><span>Hint</span>: 6-letter word for 'the vault of the sky'</p>
                    <div className="guesses">
                        <h4>Your current guesses:</h4>
                        <div>
                            {this.state.characters.map((c, i) => <span key={i} className="character">{c}</span>)}
                        </div>
                    </div>
                    {this.generatedImages.map(img => 
                        <img src={img} 
                            alt="" 
                            style={{ 
                                position: "absolute", 
                                top: Math.random() * window.innerHeight,
                                left: Math.random() * window.innerWidth,
                                transform: `rotate(${Math.random() * 360}deg)`,
                                zIndex: -1
                            }}
                        />)}
                </div>
            </div>
        )
    }
}