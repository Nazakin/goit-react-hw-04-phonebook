import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive Percentage: {positivePercentage}%</p>
  </>
);

export default Statistics;
