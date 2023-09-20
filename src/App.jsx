import { Component } from "react";
import FeedbackOptions from "./components/section/button/FeedbackOptions";
import Statistics from "./components/section/statistics/Statistics";
import Section from "./components/section/Section";
import Notification from "./components/section/notificationMassege/notification";
import PropTypes from "prop-types";
import css from "./App.module.css";

const DEFAULT_BUTTONS_NAME = { good: "Good", neutral: "Neutral", bad: "bad" };

class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    feedbackTotal: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
    feedbackTotal: this.props.feedbackTotal,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    feedbackTotal: PropTypes.number,
  };

  onLeaveFeedback = (event) => {
    this.countTotalFeedback();
    this.increamet(event.target.id);
  };

  countTotalFeedback = () => {
    this.setState((prevState) => ({
      feedbackTotal: prevState.feedbackTotal + 1,
    }));
  };

  increamet = (data) => {
    this.setState((prevState) => ({ [data]: prevState[data] + 1 }));
  };

  countPositiveFeedbackPercentage = (data) => {
    return data === 0
      ? 0 + "%"
      : Math.round((100 * this.state.good) / this.state.feedbackTotal) + "%";
  };

  render() {
    const { good, neutral, bad, feedbackTotal } = this.state;
    return (
      <section className={css.main_section}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onClick={this.onLeaveFeedback}
            id="good"
            children={DEFAULT_BUTTONS_NAME.good}
          ></FeedbackOptions>
          <FeedbackOptions
            onClick={this.onLeaveFeedback}
            id="neutral"
            children={DEFAULT_BUTTONS_NAME.neutral}
          ></FeedbackOptions>
          <FeedbackOptions
            onClick={this.onLeaveFeedback}
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
                  feedBacksData={this.countPositiveFeedbackPercentage(
                    feedbackTotal
                  )}
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
  }
}

export default App;
