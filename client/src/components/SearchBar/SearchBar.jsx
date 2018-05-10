import React, { Component, Fragment } from 'react';

import styles from './searchBar.css';
import MainWeather from '../MainWeather/MainWeather';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: undefined,
      location: undefined,
      temperature: undefined,
      condition: undefined
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
        this.setState({
          location: address.formatted,
          temperature: weather.currently.temperature,
          condition: weather.currently.summary
        });
      });
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
          temperature={this.state.temperature}
          condition={this.state.condition}
        />
      </Fragment>
    );
  }
}
