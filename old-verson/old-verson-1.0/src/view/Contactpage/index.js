import React from 'react';
import { IndexLink } from 'react-router';

import styles from './style.less';



const Contactpage = () => (
    <div className={styles.content}>
        <h1>Contact me</h1>
        <ul>
            <li>Email: <a href="javascript:;">menghui9898@gmail.com</a></li>
            <li>Blog: <a href="https://www.ferecord.com">www.ferecord.com</a></li>
            <li>Twitter: <a href="https://twitter.com/Tumars">Tumars</a></li>
        </ul>
        <IndexLink  to="/" className="btn-primary">Back to Home</IndexLink>
        <div className={styles.tusiji}></div>
    </div>
)


export default Contactpage