import React from 'react'
import PropTypes from 'prop-types'
import SvgConfig from './svg-config'
var classNames = require('classnames');


const Icon = ({ 
    type, 
    size, 
    color='none', 
    stroke='none',
    style={}, 
    className,
    ani=false
}) => {
    const cln = classNames('tj-icon', {
        ['tj-icon_large']: size === 'large',
        ['tj-icon_medium']: size === 'medium',
		['tj-icon_small']: size === 'small',
    }, className)
    style.fill = color;
    style.stroke = stroke;

    return (
        <svg
            className={classNames(cln, {['tj-icon_ani']: ani})} style={style}
            width="200" height="200"
            viewBox="0 0 1024 1024"
        >
            <path
                d={SvgConfig[type]}
                fill={color}
            ></path>
        </svg>
    )
}


Icon.propTypes = {
	type: PropTypes.string,
	size: PropTypes.string,
    color: PropTypes.string,
    stroke: PropTypes.string,
	className: PropTypes.string,
	ani:  PropTypes.bool,
};

export default Icon;