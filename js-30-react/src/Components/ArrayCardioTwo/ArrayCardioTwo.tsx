import React from 'react';

interface Props {}

interface State {
    people: Array<Person>;
    comments: Array<Comment>;
}

interface Person {
    name: string;
    year: number;
}

interface Comment {
    text: string;
    id: number;
}

export default class ArrayCardioTwo extends React.Component<Props, State> {

    people: Person[] = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
    ]

    comments: Comment[] = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
    ];
    
    constructor (props: Props) {
        super(props);
        this.state = {
            people: this.people,
            comments: this.comments
        }
        console.log("We'll be using these arrays:");
        console.log(this.people);
        console.log(this.comments);
    }

    componentDidMount() {
        console.log('Is at least one person 19 or older?');
        const atLeastNineteen: boolean = this.state.people.some((p: Person) => new Date().getFullYear() - p.year >= 19);
        console.log(atLeastNineteen);

        console.log('Is every one 19 or older?');
        const everyOneOver: boolean = this.state.people.every((p: Person) => new Date().getFullYear() - p.year >= 19);
        console.log(everyOneOver);

        console.log('Find the comment with ID of 823423');
        const findCommentById: Comment | undefined = this.state.comments.find((comment: Comment) => comment.id === 823423);
        console.log(findCommentById);

        console.log('Find the comment with ID 823423 and delete it');
        const findIndexById: number | undefined = this.state.comments.findIndex((comment: Comment) => comment.id === 823423);
        console.log(`Index: ${findIndexById}`);
        console.log('deleting...');
        setTimeout(() => {
            const newComments = [
                ...this.state.comments.slice(0, findIndexById),
                ...this.state.comments.slice(findIndexById + 1)
            ]
            console.log('deleted!');
            console.log(newComments);
        }, 3000);
    }

    render() {
        return (
            <div className="cardio-two">
                <h1>Using some(), every(), find() and findIndex()</h1>
                <h2>(Open up the console)<span role="img" aria-label="silly-smiley-face">🤪</span></h2>
            </div>
        )
    }

}