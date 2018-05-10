import React, { Component, Fragment } from 'react';

import styles from './searchBar.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Enter a city, place or address"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit" value="submit" />
        </form>
      </Fragment>
    );
  }
}
