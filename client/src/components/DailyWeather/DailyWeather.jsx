import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import moment from 'moment-timezone';

import iconMatch from '../../helpers/iconLoader';

import styles from './dailyWeather.css';

const DailyWeather = ({ dailyWeather, timezone }) => (
  <div className={styles.dailyForecast}>
    <h4 className={styles.header}>Next 7 Days:</h4>
    {dailyWeather.filter((item, index) => index !== 0).map((weather, index) => (
      <section key={shortid.generate()} className={styles.day}>
        <div className={styles.itemContainer}>
          <h4>
            {moment()
              .tz(timezone)
              .add(index + 1, 'days')
              .format('ddd')}
          </h4>
          <p className={styles.tempContainer}>
            <span className={styles.maxTemp}>{weather.temperatureMax}&#730;C</span>
            <span className={styles.divider}>/</span>
            <span className={styles.minTemp}>{weather.temperatureMin}&#730;C</span>
          </p>
          <img src={iconMatch[weather.icon] || iconMatch.snow} alt="alt icon" />
          <p className={styles.summary}>{weather.summary}</p>
        </div>
      </section>
    ))}
  </div>
);

DailyWeather.propTypes = {
  dailyWeather: PropTypes.arrayOf(PropTypes.object).isRequired,
  timezone: PropTypes.string.isRequired
};

export default DailyWeather;
