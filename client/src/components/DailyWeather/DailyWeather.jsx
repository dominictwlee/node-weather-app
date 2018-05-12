import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import iconMatch from '../../helpers/iconLoader';

import styles from './dailyWeather.css';

const DailyWeather = ({ dailyWeather }) => (
  <div className={styles.dailyForecast}>
    <h4 className={styles.header}>7 Day Weather Forecast</h4>
    {dailyWeather.filter((item, index) => index !== 0).map(weather => (
      <section key={shortid.generate()} className={styles.day}>
        <div className={styles.itemContainer}>
          <span className={styles.maxTemp}>{weather.temperatureMax}&#730;C</span>
          <span className={styles.minTemp}>{weather.temperatureMin}&#730;C</span>
          <img src={iconMatch[weather.icon] || iconMatch.snow} alt="alt icon" />
          <p className={styles.summary}>{weather.summary}</p>
        </div>
      </section>
    ))}
  </div>
);

DailyWeather.propTypes = {
  dailyWeather: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DailyWeather;
