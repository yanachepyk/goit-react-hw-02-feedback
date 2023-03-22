import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <span>Good:{good}</span>
      <span>Neutral:{neutral}</span>
      <span>Bad:{bad}</span>
      <span>Total:{total}</span>
      <span>Positiv Feedback: {positivePercentage}%</span>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
