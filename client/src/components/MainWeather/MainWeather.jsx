import React from 'react';
import PropTypes from 'prop-types';

import clearDay from '../../assets/icons/wi-day-sunny.svg';
import clearNight from '../../assets/icons/wi-night-clear.svg';
import cloudy from '../../assets/icons/wi-cloudy.svg';
import cloudyDay from '../../assets/icons/wi-day-cloudy.svg';
import cloudyNight from '../../assets/icons/wi-night-cloudy.svg';
import fog from '../../assets/icons/wi-fog.svg';
import hail from '../../assets/icons/wi-hail.svg';
import rain from '../../assets/icons/wi-rain.svg';
import sleet from '../../assets/icons/wi-sleet.svg';
import snow from '../../assets/icons/wi-snow.svg';
import styles from './mainweather.css';
import thunderstorm from '../../assets/icons/wi-thunderstorm.svg';
import tornado from '../../assets/icons/wi-tornado.svg';
import wind from '../../assets/icons/wi-strong-wind.svg';

const iconMatch = {
  'clear-day': clearDay,
  'clear-night': clearNight,
  'partly-cloudy-day': cloudyDay,
  'partly-cloudy-night': cloudyNight,
  cloudy,
  fog,
  hail,
  rain,
  sleet,
  snow,
  thunderstorm,
  tornado,
  wind
};

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
