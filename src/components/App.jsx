import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }
  
  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / (good + neutral + bad)) * 100);
  }

  const leaveFeedback = (type) => {
    switch (type) {
      case 'good':
        return setGood(state => state + 1);
      case 'neutral':
        return setNeutral(state => state + 1);
      case 'bad':
        return setBad(state => state + 1);
      
      default:
        alert("Click the button!");
    }
  }
  return (
    <>
      <Section title="Please leave feedback" >
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={leaveFeedback}
        />
         
      </Section>
      {good > 0 || neutral > 0 || bad > 0
        ? (<Section title="Statistics" >
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={good ? countPositiveFeedbackPercentage() + "%" : 0} />
        </Section>)
        : <Notification message="There is no feedback"></Notification>
      }
    </>
  )
}