import PropTypes from 'prop-types';
import Section from 'components/Section/Section';
import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Statistics/Notification';
import { Container, ContainerBtn, ContainerText } from './Feedback.styled';

class Feedback extends Component {
  countTotalFeedback() {
    return Object.values(this.props.feedback).reduce((sum, value) => {
      return sum + value;
    }, 0);
  }

  countPositiveFeedbackPercentage(total) {
    return total ? Math.round((this.props.feedback.good / total) * 100) : 0;
  }

  render() {
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage(total);
    return (
      <Container>
        <Section title="Please leave feedback">
          <ContainerBtn>
            <FeedbackOptions
              options={Object.keys(this.props.feedback)}
              onLeaveFeedback={this.props.onLeaveFeedback}
            />
          </ContainerBtn>
        </Section>

        <Section title="Statistics">
          <ContainerText>
            {total > 0 ? (
              <Statistics
                good={this.props.feedback.good}
                neutral={this.props.feedback.neutral}
                bad={this.props.feedback.bad}
                total={total}
                positivePercentage={percentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </ContainerText>
        </Section>
      </Container>
    );
  }
}

Feedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  onLeaveFeedback: PropTypes.func,
};

export default Feedback;
