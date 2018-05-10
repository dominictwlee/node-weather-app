import React from 'react';

import styles from './app.css';
import Background from '../Background/Background';
import SearchBar from '../SearchBar/SearchBar';

const App = () => (
  <div className={styles.pageContainer}>
    <Background />
    <SearchBar />
  </div>
);

export default App;
