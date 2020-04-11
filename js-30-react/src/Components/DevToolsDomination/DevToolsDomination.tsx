import React, { RefObject } from 'react';

export interface Props {}

export interface State {
    dogs: Array<Dog>;
}

export interface Dog {
    name: string;
    age: number;
}

export default class DevToolsDomination extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            dogs: [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }]
        } 
    }

    devTools: RefObject<HTMLDivElement> = React.createRef();

    // source: https://alligator.io/js/console/
    componentDidMount() {
        // Regular
        console.log('This is a regular console.log');

        // Interpolated
        console.log('console.log(This is an interpolated %s, string) --> This is an interpolated %s', '%s', 'string');

        // Styled
        console.log('This is a %cstyled %cconsole.log', 'color: salmon; font-size: 20px; font-weight: bold', 'color: white;');

        // warning!
        console.warn('⚠ ⚠ ⚠ This is a console warning ⚠ ⚠ ⚠ (console.warn)');

        // Error :|
        console.error('🔥🔥🔥 FIRE!! 🔥🔥🔥 (console.error)');

        // Info
        console.info('This is a gentle reminder that no one is probably going to read this. (console.info)')

        // Testing
        console.assert(2 + 2 === 5, '2 + 2 !== 5');

        // clearing
        let timer: number = 10;
        const interval = setInterval(() => {
            if(timer > 0) {
                console.log(timer);
            } else {
                clearInterval(interval);
                console.clear();
            }
            timer -= 1
        }, 1000)

        // Viewing DOM Elements
        console.log('console.dir() provides a list of properties specified on javascript object:')
        console.dir(this.devTools);

        // Grouping together
        const [one, two]: Dog[] = this.state.dogs;
        console.group('🐕🐕🐕🐕 dogs 🦴🦴🦴🦴');
        console.group('Name');
        console.log(one.name);
        console.log(two.name);
        console.groupEnd();
        console.group('Age');
        console.log(one.age);
        console.log(two.age);
        console.groupEnd();
        console.groupEnd();
        console.log('END');

        // counting
        console.log('Count number of times a random number between 0 - 10 (inclusive) is greater or less than 5 10 times (console.count)');
        for(let i: number = 0; i < 10; i++) {
            const rand = Math.ceil(Math.random() * 10);
            rand === 5 ? console.log('equal 5!') : rand > 5 ? console.count('>') : console.count('<');
        }

        // timing
        console.log('%cUsing console.time for API call', 'color: hotpink');
        console.time('getting data');
        const getWesInfo = async () => {
            const info: Response = await fetch('https://api.github.com/users/wesbos');
            const jsonInfo: Object = await info.json();
            console.dir(jsonInfo);
            console.timeEnd('getting data')
        };
        getWesInfo();

    }
    
    render() {
        return (
            <div className="devtools" ref={this.devTools}>
                <h1>Open up the<span>console</span> to see the usage of different console methods</h1>
            </div>
        )
    }
}