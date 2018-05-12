import React, { Component, Fragment } from 'react';

import MainWeather from '../MainWeather/MainWeather';
import DailyWeather from '../DailyWeather/DailyWeather';
import SearchBar from '../SearchBar/SearchBar';
import Loading from '../Loading/Loading';

import styles from './mainPage.css';

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
      timezone: '',
      loading: false,
      notFound: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true });
    this.setState({ notFound: false });
    fetch(`/api/weather?address=${this.state.input}`)
      .then(res => res.json())
      .then(({ address, weather }) => {
        this.setState({
          location: address.formatted,
          temperature: `${weather.currently.temperature}${String.fromCharCode('0176')}C`,
          condition: weather.currently.summary,
          weatherList: weather.daily.data,
          icon: weather.currently.icon,
          timezone: weather.timezone,
          loading: false
        });
      })
      .catch(err => {
        console.error(err);
        this.setState({ loading: false, notFound: true });
      });
  }

  render() {
    return (
      <Fragment>
        <SearchBar handleSubmit={this.handleSubmit} inputValue={this.state.input} handleChange={this.handleChange} />
        {this.state.notFound ? <h1 className={styles.invalidMsg}>Sorry, location not found</h1> : null}
        {this.state.loading ? <Loading /> : null}
        {!this.state.loading && this.state.notFound ? null : (
          <Fragment>
            <MainWeather
              location={this.state.location || null}
              temperature={this.state.temperature || null}
              condition={this.state.condition || null}
              icon={this.state.icon || 'thermometer'}
              timezone={this.state.timezone || 'Etc/UTC'}
            />
            <DailyWeather dailyWeather={this.state.weatherList} timezone={this.state.timezone || 'Etc/UTC'} />
          </Fragment>
        )}
      </Fragment>
    );
  }
}
