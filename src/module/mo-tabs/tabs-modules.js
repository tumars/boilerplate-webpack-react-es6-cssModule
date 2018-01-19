import React from 'react'
import PropTypes from 'prop-types'
import './tabs.less';


// 标签页内容
const Panel = ({key, children, isActive }) => (
    <div key={key} className={"tj-tabs-pane" + (isActive ? ' tj-tabs-pane-active' : ' tj-tabs-pane-active')}>
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
        <div className="tj-tabs-nav-wrap">
            {
                titles.map((title, i) => 
                    <div 
                        key={title} 
                        className={`tj-tabs-nav ${activeIndex == i ? 'tj-tabs-nav-active' : ''}`} 
                        style={{width: 100/len + "%"}} 
                        onClick={onChange.bind(null, i)}
                    >
                        { title }
                    </div>
                )
            }
            <div className="tj-tabs-activebar" style={{ width: 100/len + "%",marginLeft:activeIndex*100/len + "%"}}></div>
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