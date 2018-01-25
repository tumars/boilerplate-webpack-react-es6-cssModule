import React from 'react';
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

export default Spin


