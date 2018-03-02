import React from 'react';
import PropTypes from 'prop-types'
import './spin.less';

var classNames = require('classnames');


const Spin = ({visible, className, style}) => (
    <div className={classNames("tj-laballspin", className)} style={{display: visible ? 'inline-block': 'none', ...style}}>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
)

Spin.propTypes = {
	visible: PropTypes.bool,
	className:  PropTypes.bool,
	style: PropTypes.object
};

export default Spin


