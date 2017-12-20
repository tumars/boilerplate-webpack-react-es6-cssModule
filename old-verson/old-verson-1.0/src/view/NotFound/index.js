import React from 'react';
import { IndexLink } from 'react-router';

import styles from './style.less';



const NotFound = () => (
    <div className={styles.content}>
        <h1>404</h1>
        <p>can not found the page.</p>
        <p>try enter <strong>"about"</strong> or <strong>"contact"</strong> page.</p>
        <IndexLink  to="/" className="btn-primary">Back to Home</IndexLink>
    </div>
)


export default NotFound
