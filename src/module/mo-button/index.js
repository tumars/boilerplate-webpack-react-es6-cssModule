import React from 'react'
import PropTypes from 'prop-types'
import './button.less'
var classNames = require('classnames');

const Button = ({children, onClick, type="primary", size, bg, className, style}) => {
	if(bg) {
		style.background = bg
	}
	const cln = classNames("tj-btn", {
		["tj-btn__large"]: size === 'large',
		["tj-btn__small"]: size === 'small',
		["tj-btn__primary"]: type === 'primary',
	}, className)
	return (
		<span className={cln} style={style} onClick={onClick}>
			{children}
		</span>
	)
}

Button.propTypes = {
	onClick: PropTypes.func,
	type: PropTypes.string,
	size: PropTypes.string,
	bg: PropTypes.string,
	className:  PropTypes.bool,
	style: PropTypes.object
};


export default Button


