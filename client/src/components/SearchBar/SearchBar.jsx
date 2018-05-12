import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// import Default from '../Default/Default';

import styles from './searchBar.css';

const SearchBar = props => (
  <Fragment>
    <form onSubmit={props.handleSubmit} className={styles.searchBar}>
      <input
        className={styles.textInput}
        type="text"
        placeholder="Enter a location"
        value={props.inputValue}
        onChange={props.handleChange}
      />
      <button className={styles.button}>Search</button>
    </form>
  </Fragment>
);

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SearchBar;
