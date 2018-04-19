import React from 'react'
import PropTypes from 'prop-types'
import './tabs.less';

var classNames = require('classnames');

// 标签页内容
const Panel = ({children, isActive }) => (
    <div 
        className={classNames('tj-tabs__pane', {
            'tj-tabs__pane--active': isActive,
            'tj-tabs__pane--inactive': !isActive
        })}
    >
        {children}
    </div>
)

Panel.propTypes = {
    key: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    isActive: PropTypes.bool
}

// 标签
const Nav = ({titles, activeIndex, onChange}) => {
    const len = titles.length
    return (
        <div className="tj-tabs__nav-wrap">
            {
                titles.map((title, i) => 
                    <div 
                        key={title} 
                        className={
                            classNames('tj-tabs__nav', {
                                'tj-tabs__nav--active': activeIndex == i
                            })
                        } 
                        style={{width: 100/len + "%"}} 
                        onClick={onChange.bind(null, i)}
                    >
                        { title }
                    </div>
                )
            }
            <div className="tj-tabs__activebar" style={{ width: 100/len + "%",marginLeft:activeIndex*100/len + "%"}}></div>
        </div>
    )
}

Nav.propTypes = {
    titles: PropTypes.array,
    activeIndex: PropTypes.number,
    onChange: PropTypes.func,
}

export {
    Panel,
    Nav
}