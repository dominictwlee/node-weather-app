import React, { Component, Fragment } from 'react';

import MainWeather from '../MainWeather/MainWeather';
import DailyWeather from '../DailyWeather/DailyWeather';
// import Default from '../Default/Default';

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
      icon: ''
      // isFetched: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    // this.setState({ isFetched: false });
    event.preventDefault();
    fetch(`/api/weather?address=${this.state.input}`)
      .then(res => res.json())
      .then(({ address, weather }) => {
        this.setState({
          location: address.formatted,
          temperature: `${weather.currently.temperature}${String.fromCharCode('0176')}C`,
          condition: weather.currently.summary,
          weatherList: weather.daily.data,
          icon: weather.currently.icon
          // isFetched: true
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
        <Fragment>
          <MainWeather
            location={this.state.location || null}
            temperature={this.state.temperature || null}
            condition={this.state.condition || null}
            icon={this.state.icon || 'thermometer'}
          />
          <DailyWeather dailyWeather={this.state.weatherList} />
        </Fragment>
      </form>
    );
  }
}
