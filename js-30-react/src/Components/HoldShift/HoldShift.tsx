import React, { SyntheticEvent, RefObject } from 'react';

export interface Props {}
export interface State {
    words: string[]
    checkboxes: Checkbox[]
}

export interface Checkbox {
    name: string;
    checked: boolean
}

export default class HoldShift extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        const words: string[] = [
            'This is an inbox layout.',
            'Check one or more items',
            'Hold down your Shift key',
            'Check a lower item or a higher item',
            'Everything in between should also be checked',
            'If checkboxes are selected at both ends',
            'all checkboxes will be selected from the top to the one clicked',
            'Done with React',
            'Wow!',
            'Wasn\'t that easy?'
        ]
        const checkboxes: Checkbox[] = Array.from(words, (item: string, i: number) => { return {name: `box${i+1}`, checked: false}});

        // initializing with setState would not work as setState is called only when there are changes to state
        this.state= ({ words, checkboxes });
        this.checkShift = this.checkShift.bind(this);
        this.checkboxHandler = this.checkboxHandler.bind(this);
    }

    shiftDown: boolean = false;
    list: RefObject<HTMLDivElement> = React.createRef();

    componentDidMount() {
        // focus so that the first key press will register
        this.list.current?.focus();
    }

    checkShift(e: SyntheticEvent) {
        const event: KeyboardEvent = e.nativeEvent as KeyboardEvent;
        // console.log(event);
        if (event.key === "Shift") {
            this.shiftDown ? this.shiftDown = false : this.shiftDown = true;
        } 
    }

    checkboxHandler(e: SyntheticEvent) {
        // update boolean values in state
        const clickedBox: string = e.currentTarget.getAttribute('id') as string;
        const indexOfClicked: number = this.state.checkboxes.findIndex(boxModel => boxModel.name === clickedBox);
        const checkboxes = [...this.state.checkboxes];
        
        // console.log(this.shiftDown);
        if (this.shiftDown) {

             const firstChecked: number = this.state.checkboxes.findIndex(model => model.checked);
             if (indexOfClicked >= firstChecked) {
                 checkboxes.forEach((model: Checkbox, i: number) => {
                    if (i >= firstChecked && i <= indexOfClicked) { model.checked = true; }
                 });
             } else {
                checkboxes.forEach((model: Checkbox, i: number) => {
                    if (i >= indexOfClicked && i <= firstChecked) { model.checked = true; }
                 });
             }

             this.setState({ checkboxes });
        } else {
            checkboxes[indexOfClicked].checked ? 
            checkboxes[indexOfClicked] = { name: clickedBox, checked: false } : 
            checkboxes[indexOfClicked] = { name: clickedBox, checked: true }
            this.setState({ checkboxes })
        }
    }

    render() {
        return(
            // Need to use tabIndex for onKeyUp
            <div tabIndex={0} className="hold-shift" onKeyDown={this.checkShift} onKeyUp={this.checkShift} ref={this.list}>
                <ul className="inbox">
                    {this.state.words.map((item, i) => 
                    <li key={i+1}>
                        <input 
                            type="checkbox" 
                            id={`box${i+1}`}
                            onChange={this.checkboxHandler} 
                            checked={this.state.checkboxes[i].checked}/>
                        <label htmlFor={`box${i+1}`}>{item}</label>
                    </li>)}
                </ul>
            </div>
        )
    }
}