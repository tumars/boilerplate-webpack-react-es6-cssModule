import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import styles from './style.less';
import btn from '../../components/Button/button.less';



class Aboutpage extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
        <div className={styles.content}>
            <h1>About</h1>
            <p>This is a boilerplate for webpack-react-es6-cssModule project. You could use it as a base to build your own web app.</p>
            <p>You can get update and more information in github:</p>
            <p><a href="https://github.com/tumars/boilerplate-webpack-react-es6-cssModule">https://github.com/tumars/boilerplate-webpack-react-es6-cssModule</a></p>
            <IndexLink  to="/" className={btn.primary}>Back to Home</IndexLink>
        </div>
    )
  }
}


export default Aboutpage
