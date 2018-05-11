import React from 'react';
import PropTypes from 'prop-types';

import iconMatch from '../../helpers/iconLoader';

import styles from './mainweather.css';

const MainWeather = props => (
  <main className={styles.weatherPanel}>
    <p>{props.condition || 'Bloody cold'}</p>
    <p>{`${props.temperature}` || '-50'}&#730;C</p>
    <p>{props.location || 'Beyond The Wall, Westeros'}</p>
    <img className={styles.icon} src={iconMatch[props.icon] || iconMatch.snow} alt="alt icon" />
  </main>
);

MainWeather.propTypes = {
  condition: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default MainWeather;
