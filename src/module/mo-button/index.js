import React from 'react'
import './button.less'
var classNames = require('classnames');

const Button = ({children, onClick, type, size, bg, className, style={}}) => {
	if(bg) {
		style.background = bg
	}
	const cln = classNames("tj-btn", {
		["tj-btn__large"]: size === 'large',
		["tj-btn__small"]: size === 'small',
		["tj-btn__primary"]: type === 'primary',
	}, className)
	return (
		<div className={cln} style={style} onClick={onClick}>
			{children}
		</div>
	)
}


export default Button


