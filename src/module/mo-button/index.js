import React from 'react'
import styles from './button.less'
var classNames = require('classnames');

const Button = ({children, onClick, type, size, bg, className, style={}}) => {
	if(bg) {
		style.background = bg
	}
	const cln = classNames(styles.btn, {
		[styles['btn-large']]: size === 'large',
		[styles['btn-small']]: size === 'small',
		[styles['btn-primary']]: type === 'primary',
	}, className)
	return (
		<div className={cln} style={style} onClick={onClick}>
			{children}
		</div>
	)
}





export default Button


