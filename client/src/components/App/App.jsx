import React from 'react';

import styles from './app.css';
import Background from '../Background/Background';
import Search from '../Search/Search';

const App = () => (
  <div className={styles.pageContainer}>
    <Background />
    <Search />
  </div>
);

export default App;
