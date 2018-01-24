import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './steps.less'

var classNames = require('classnames');


class Steps extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {
			current,
			children,
			className,
			style,
		} = this.props;
		const len = children.length;

		return (
			<div className={classNames("tj-steps", className)} style={style}>
				{
					React.Children.map(children, (child, index)=> {
						return React.cloneElement(child, {
							status: current >= index ? 'success' : 'wait',
							lineStyle: {display: len-1 === index ? 'none' : 'auto'}
						})
					})
				}
			</div>
		)
	}
}


Steps.propTypes = {
	current: PropTypes.number
};

export default Steps


