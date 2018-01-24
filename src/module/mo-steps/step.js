import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from 'mo-icon'
import './steps.less'

var classNames = require('classnames');

class Step extends Component {
	static defaultProps = {
		status: 'wait'
	};
	constructor(props) {
		super(props);
	}
	render() {
		const {
			title,
			description,
			status,
			style,
			lineStyle
		} = this.props;
		const statusClass = `is-${status}`;

		return (
			<div className="tj-step" style={style}>
				<div className={classNames('tj-step__head',statusClass)}>
					<div className="tj-step__line" style={lineStyle}>
						<i className="tj-step__line-inner"></i>
					</div>
					<div className="tj-step__icon">
						{
							status === 'success' 
								? <Icon type='check-circle' color="#7ED321"/>
								: <i className="tj-step__icon-none"></i>
						}
					</div>
				</div>
				<div className="tj-step__main">
					<div className="tj-step__title">{title}</div>
					<div className="tj-step__description">{description}</div>
				</div>
			</div>
		)

		
	}
}


Step.propTypes = {
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	status: PropTypes.string,
	style: PropTypes.object,
	lineStyle:  PropTypes.object,
};

export default Step


