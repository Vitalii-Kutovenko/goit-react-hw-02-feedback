const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total Feedback: {total}</p>
      <p>Positive Feedback Percentage: {positivePercentage}%</p>
    </div>
  );
  export default Statistics