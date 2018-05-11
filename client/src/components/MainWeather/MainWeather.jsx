import React from 'react';
import PropTypes from 'prop-types';

import iconMatch from '../../helpers/iconLoader';

import styles from './mainweather.css';

const MainWeather = props => (
  <main className={styles.weatherPanel}>
    <header className={styles.weatherInfo}>
      <p>{props.condition}</p>
      <p>{props.temperature}</p>
    </header>
    <figure>
      <img className={styles.icon} src={iconMatch[props.icon]} alt="alt icon" />
    </figure>
    <section className={styles.text}>
      <p>{props.location}</p>
    </section>
  </main>
);

MainWeather.propTypes = {
  condition: PropTypes.string,
  temperature: PropTypes.string,
  location: PropTypes.string,
  icon: PropTypes.string.isRequired
};

MainWeather.defaultProps = {
  condition: '',
  temperature: '',
  location: ''
};

export default MainWeather;
