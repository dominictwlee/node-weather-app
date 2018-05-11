import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import iconMatch from '../../helpers/iconLoader';

import styles from './mainweather.css';

const MainWeather = props => (
  <main className={styles.weatherPanel}>
    <Fragment>
      <p>{props.condition}</p>
      <p>{props.temperature}&#730;C</p>
      <p>{props.location}</p>
      <img className={styles.icon} src={iconMatch[props.icon]} alt="alt icon" />
    </Fragment>
  </main>
);

MainWeather.propTypes = {
  condition: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default MainWeather;
