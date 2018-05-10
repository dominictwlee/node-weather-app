import React from 'react';
import PropTypes from 'prop-types';

import styles from './mainweather.css';

const MainWeather = props => (
  <main className={styles.weatherPanel}>
    <p>{props.condition || 'Bloody cold'}</p>
    <p>{`${props.temperature}` || '-50'}&#730;C</p>
    <p>{props.location || 'Beyond The Wall, Westeros'}</p>
  </main>
);

MainWeather.propTypes = {
  condition: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

export default MainWeather;
