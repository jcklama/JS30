import React, { SyntheticEvent } from 'react'
import { generateUrlParam } from './utils/utils'

interface Props {
    name: string
    key: string
    push: Function
}

interface State {}

export default class ExerciseCard extends React.Component <Props, State>{

    constructor(props: Props) {
        super(props)
        this.redirect = this.redirect.bind(this);
    }

    redirect(event?: SyntheticEvent) {
        if (event) { event.preventDefault(); }
        this.props.push(`${generateUrlParam(this.props.name)}`);
    }

    render() {
        return (
        <div className="exercise-card" onClick={this.redirect}>{this.props.name}</div>
        )
    }
}