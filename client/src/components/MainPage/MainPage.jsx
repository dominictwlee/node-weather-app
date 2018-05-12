import React, { Component, Fragment } from 'react';

import MainWeather from '../MainWeather/MainWeather';
import DailyWeather from '../DailyWeather/DailyWeather';
import SearchBar from '../SearchBar/SearchBar';
// import Default from '../Default/Default';

// import styles from './search.css';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      location: '',
      temperature: '',
      condition: '',
      weatherList: [{}],
      icon: '',
      timezone: ''

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
          icon: weather.currently.icon,
          timezone: weather.timezone
          // isFetched: true
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Fragment>
        <SearchBar handleSubmit={this.handleSubmit} inputValue={this.state.input} handleChange={this.handleChange} />
        <MainWeather
          location={this.state.location || null}
          temperature={this.state.temperature || null}
          condition={this.state.condition || null}
          icon={this.state.icon || 'thermometer'}
          timezone={this.state.timezone || 'Etc/UTC'}
        />
        <DailyWeather dailyWeather={this.state.weatherList} timezone={this.state.timezone || 'Etc/UTC'} />
      </Fragment>
    );
  }
}
