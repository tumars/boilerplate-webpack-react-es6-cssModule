import React from 'react'
import SvgConfig from './svg-config'
import './icon.less'
var classNames = require('classnames');


const Icon = ({ 
    type, 
    size, 
    color="#eee", 
    style={}, 
    className 
}) => {
    const cln = classNames('tj-icon', {
		['tj-icon__large']: size === 'large',
		['tj-icon__small']: size === 'small',
    }, className)
    style.fill = color

    return (
        <svg
            className={cln} style={style}
            width="200" height="200"
            viewBox="0 0 1024 1024"
        >
            <path
            d={SvgConfig[type]}
            ></path>
        </svg>
    )
}

export default Icon;