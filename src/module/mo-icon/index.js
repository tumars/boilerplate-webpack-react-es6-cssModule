import React from 'react'
import PropTypes from 'prop-types'
import SvgConfig from './svg-config'
import styles from './icon.less'
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
    const cln = classNames(styles.icon, {
        [styles['icon-large']]: size === 'large',
        [styles['icon-medium']]: size === 'medium',
		[styles['icon-small']]: size === 'small',
    }, className)
    style.fill = color;
    style.stroke = stroke;

    return (
        <svg
            className={classNames(cln, {[styles['ani']]: ani})} style={style}
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