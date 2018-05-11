import React, { Component, Fragment } from 'react';

import MainWeather from '../MainWeather/MainWeather';
import DailyWeather from '../DailyWeather/DailyWeather';

import styles from './search.css';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      location: '',
      temperature: '',
      condition: '',
      weatherList: [{}],
      icon: '',
      isFetched: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ isFetched: false });
    event.preventDefault();
    fetch(`/api/weather?address=${this.state.input}`)
      .then(res => res.json())
      .then(({ address, weather }) => {
        this.setState({
          location: address.formatted,
          temperature: weather.currently.temperature,
          condition: weather.currently.summary,
          weatherList: weather.daily.data,
          icon: weather.currently.icon,
          isFetched: true
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={styles.textInput}
          type="text"
          placeholder="Enter a city, place or address"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <input type="submit" value="submit" />

        {!this.state.isFetched ? (
          <h1>Pending</h1>
        ) : (
          <Fragment>
            <MainWeather
              location={this.state.location}
              temperature={this.state.temperature.toString()}
              condition={this.state.condition}
              icon={this.state.icon}
            />
            <DailyWeather dailyWeather={this.state.weatherList} />
          </Fragment>
        )}
      </form>
    );
  }
}
