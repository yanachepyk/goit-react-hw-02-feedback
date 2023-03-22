import { Component } from 'react';
import Feedback from './Feedback/Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackClick = event => {
    const { name } = event.target;
    this.setState(prevState => {
      return { ...prevState, [name]: prevState[name] + 1 };
    });
  };

  render() {
    return <Feedback feedback={this.state} onLeaveFeedback={this.handleFeedbackClick}/>;
  }
}
