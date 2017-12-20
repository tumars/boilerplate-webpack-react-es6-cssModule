import React, { Component } from 'react'

import styles from './button.less'


class Button extends Component {
	constructor(props) {
        super(props)
    }

    render() {
		const { children, bg, onClick } = this.props
		const style = {}
		if(bg) {
			style.background = bg
		}
		return (
			<div className={styles.btn} style={style} onClick={onClick}>
				{children}
				<i className={styles.icon}></i>
			</div>
		)
	}
}



export default Button


