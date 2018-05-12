import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';

import iconMatch from '../../helpers/iconLoader';

import styles from './mainweather.css';

class MainWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment()
        .tz(this.props.timezone)
        .format('zz MMMM Do YYYY, h:mm:ss a')
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.timeCount(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  timeCount() {
    this.setState({
      time: moment()
        .tz(this.props.timezone)
        .format('zz MMMM Do YYYY, h:mm:ss a')
    });
  }

  render() {
    return (
      <main className={styles.weatherPanel}>
        <header className={styles.weatherInfo}>
          <p>{this.props.condition}</p>
          <p>{this.props.temperature}</p>
        </header>
        <figure>
          <img className={styles.icon} src={iconMatch[this.props.icon]} alt="alt icon" />
        </figure>
        <section className={styles.text}>
          <p>{this.props.location}</p>
          <p>{this.state.time}</p>
        </section>
      </main>
    );
  }
}

MainWeather.propTypes = {
  condition: PropTypes.string,
  temperature: PropTypes.string,
  location: PropTypes.string,
  icon: PropTypes.string.isRequired,
  timezone: PropTypes.string.isRequired
};

MainWeather.defaultProps = {
  condition: '',
  temperature: '',
  location: ''
};

export default MainWeather;
