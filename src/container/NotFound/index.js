import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import styles from './style.less';
import btn from '../../components/Button/button.less';



class NotFound extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.content}>
                <h1>404</h1>
                <p>can not found the page.</p>
                <p>you can try <strong>"about"</strong> or <strong>"contact"</strong> page.</p>
                <IndexLink  to="/" className={btn.primary}>Back to Home</IndexLink>
            </div>
        )
    }
}


export default NotFound
