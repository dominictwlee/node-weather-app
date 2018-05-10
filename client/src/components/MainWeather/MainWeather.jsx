import React from 'react';
import PropTypes from 'prop-types';

import styles from './mainweather.css';

const MainWeather = props => (
  <main className={styles.weatherPanel}>
    <p>{props.condition}</p>
    <p>{props.temperature}&#730;C</p>
    <p>{props.location}</p>
  </main>
);

MainWeather.propTypes = {
  condition: PropTypes.string,
  temperature: PropTypes.string,
  location: PropTypes.string
};

MainWeather.defaultProps = {
  condition: 'Winter is coming',
  temperature: '-50',
  location: 'Beyond The Wall, Westeros'
};

export default MainWeather;
