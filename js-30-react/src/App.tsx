import React from 'react';
import { exercises } from './data'
import ExerciseCard from './ExerciseCard'

export interface Props {
  history: PropsHistory
}

export interface PropsHistory {
  push: Function
}

export interface State {}

class App extends React.Component<Props, State> {
  
  render() {
    return (
      <div className="table-of-contents">
          {exercises.map((name) => <ExerciseCard 
            name={name} 
            key={name} 
            push={this.props.history.push}/>)}
      </div>
    );
  }
}

export default App;
