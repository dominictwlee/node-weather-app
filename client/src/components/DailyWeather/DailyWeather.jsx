import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import iconMatch from '../../helpers/iconLoader';

import styles from './dailyWeather.css';

const DailyWeather = ({ dailyWeather }) => (
  <div className={styles.weatherPanel}>
    <h4>7 Day Weather Forecast</h4>
    {dailyWeather.filter((item, index) => index !== 0).map(weather => (
      <section key={shortid.generate()} className={styles.day}>
        <p>{weather.summary}</p>
        <p>
          <span>{weather.temperatureMax}</span>
          <span> | </span>
          <span>{weather.temperatureMin}</span>
          <img src={iconMatch[weather.icon] || iconMatch.snow} alt="alt icon" />
        </p>
      </section>
    ))}
  </div>
);

DailyWeather.propTypes = {
  dailyWeather: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DailyWeather;
