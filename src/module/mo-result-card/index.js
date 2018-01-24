import React from 'react'
import Icon from 'mo-icon'
import styles from './resultcard.less'

var classNames = require('classnames');

const ResultCard = ({type, title, desc, className, style}) => {
	const isSuccess = type === 'success';
	const color = isSuccess ? '#7ed321' : '#ff7748'
	const iconType = isSuccess ? 'check-circle' : 'fail-circle'
	return (
		<div className={classNames(styles.wrap, className)} style={style}>
			<Icon type={iconType} size="large" color={color} />
			<h2>{title}</h2>
			<h3>{desc}</h3>
		</div>
	)
}

export default ResultCard


