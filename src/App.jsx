import { useState } from "react";
import FeedbackOptions from "./components/section/button/FeedbackOptions";
import Statistics from "./components/section/statistics/Statistics";
import Section from "./components/section/Section";
import Notification from "./components/section/notificationMassege/notification";

import css from "./App.module.css";

const DEFAULT_BUTTONS_NAME = { good: "Good", neutral: "Neutral", bad: "Bad" };

export const App = () => {
  const [feedback, setValueFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const [feedbackTotal, setFeedbackTotal] = useState(0);

  const { good, neutral, bad } = feedback;

  const onLeaveFeedback = (event) => {
    countTotalFeedback();
    increamet(event.target.id);
  };

  const countTotalFeedback = () => {
    setFeedbackTotal(feedbackTotal + 1);
  };

  const increamet = (feedbackType) => {
    setValueFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const countPositiveFeedbackPercentage = (data) => {
    return data === 0 ? 0 : Math.round((100 * good) / feedbackTotal);
  };

  return (
    <section className={css.main_section}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onClick={onLeaveFeedback}
          id="good"
          children={DEFAULT_BUTTONS_NAME.good}
        ></FeedbackOptions>
        <FeedbackOptions
          onClick={onLeaveFeedback}
          id="neutral"
          children={DEFAULT_BUTTONS_NAME.neutral}
        ></FeedbackOptions>
        <FeedbackOptions
          onClick={onLeaveFeedback}
          id="bad"
          children={DEFAULT_BUTTONS_NAME.bad}
        >
          Bad{" "}
        </FeedbackOptions>
      </Section>

      <Section title="Statistics">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "10px",
          }}
        >
          {" "}
          {feedbackTotal > 0 ? (
            <>
              <Statistics children="Good" feedBacksData={good} />
              <Statistics children="Neutral" feedBacksData={neutral} />
              <Statistics children="Bad" feedBacksData={bad} />
              <Statistics children="Total" feedBacksData={feedbackTotal} />
              <Statistics
                children="Positive feedback"
                feedBacksData={countPositiveFeedbackPercentage(feedbackTotal)}
                percentageRatio={true}
              />
            </>
          ) : (
            <>
              <Notification message="There is no feedback." />
            </>
          )}
        </div>
      </Section>
    </section>
  );
};
