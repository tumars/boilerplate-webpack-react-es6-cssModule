import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'mo-icon'
import styles from './resultcard.less'

var classNames = require('classnames');

const ResultCard = ({type, title, desc, className, style}) => {
	const isSuccess = type === 'success';
	const stroke = isSuccess ? '#7ed321' : '#ff7748'
	const iconType = isSuccess ? 'check-circle' : 'fail-circle'
	return (
		<div className={classNames(styles.wrap, className)} style={style}>
			<Icon type={iconType} size="large" stroke={stroke} color={stroke} ani />
			<h2>{title}</h2>
			<h3>{desc}</h3>
		</div>
	)
}

ResultCard.propTypes = {
	type: PropTypes.string,
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	desc: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	className:  PropTypes.bool,
	style: PropTypes.object
};

export default ResultCard


