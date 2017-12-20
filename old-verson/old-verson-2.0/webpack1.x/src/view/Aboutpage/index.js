import React from 'react';
import { IndexLink } from 'react-router';

import styles from './style.less';


const Aboutpage = () => (
    <div className={styles.content}>
        <h1>About</h1>
        <p>This is a boilerplate for webpack-react-es6-cssModule project. You could use it as a base to build your own web app.</p>
        <p>You can get update and more information in this github repo:</p>
        <p><a href="https://github.com/tumars/boilerplate-webpack-react-es6-cssModule">https://github.com/tumars/boilerplate-webpack-react-es6-cssModule</a></p>
        <IndexLink  to="/" className="btn-primary">Back to Home</IndexLink>
        <div className={styles.logo}></div>
    </div>
)

export default Aboutpage
