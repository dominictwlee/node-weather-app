import React, { Component, Fragment } from 'react';

import styles from './search.css';
import MainWeather from '../MainWeather/MainWeather';
import DailyWeather from '../DailyWeather/DailyWeather';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      location: '',
      temperature: '',
      condition: '',
      icon: '',
      weatherList: [{}]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/weather?address=${this.state.input}`)
      .then(res => res.json())
      .then(({ address, weather }) => {
        // console.log(weather.daily.data);
        this.setState({
          location: address.formatted,
          temperature: weather.currently.temperature,
          condition: weather.currently.summary,
          weatherList: weather.daily.data,
          icon: weather.currently.icon
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Enter a city, place or address"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <input type="submit" value="submit" />
        </form>
        <MainWeather
          location={this.state.location}
          temperature={this.state.temperature.toString()}
          condition={this.state.condition}
          icon={this.state.icon}
        />
        <DailyWeather dailyWeather={this.state.weatherList} />
      </Fragment>
    );
  }
}
