import React, { Component } from 'react';
import posed from 'react-pose';

import styles from './loading.css';
import iconMatch from '../../helpers/iconLoader';

const loadConfig = {
  to: { rotate: 180 },
  from: { rotate: 0 }
};

const LoadIcon = posed.img(loadConfig);

export default class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRolling: false
    };
  }

  componentDidMount() {
    this.executeAndLoop(500);
  }

  componentWillUnmount() {
    clearInterval(this.iconId);
  }

  executeAndLoop(time) {
    this.setState({ isRolling: !this.state.isRolling });
    this.iconId = setInterval(() => {
      this.setState({ isRolling: !this.state.isRolling });
    }, time);
  }

  render() {
    const { isRolling } = this.state;
    return <LoadIcon className={styles.icon} src={iconMatch.loading} pose={isRolling ? 'to' : 'from'} />;
  }
}
