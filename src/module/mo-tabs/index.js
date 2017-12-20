import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Carousel from '../mo-carousel'
import './tabs.less';

const Panel = ({key, children, isActive }) => (
    <div key={key} className={"tj-tabs-pane" + (isActive ? ' tj-tabs-pane-active' : ' tj-tabs-pane-active')}>
        {children}
    </div>
)

class Tabs extends Component {
    constructor(props) {
        super(props)
        this.state =  {
            activeIndex: this.props.activeIndex
        }
    }
    
    static Panel = Panel

    handleTabClick(i) {
        const { activeIndex } = this.state
        if(i !== activeIndex) {
            this.setState({
                activeIndex: i
            })
            this.props.onTabChange && this.props.onTabChange(activeIndex, i)
        }
    }


    render() {
        const  { activeIndex } = this.state
        if(this.props.children.length==0) {
            console.warn('missing Tabs children')
            return null
        }
        const panels = this.props.children
        const paneLen = panels.length

        return (
            <div ref={(n) => this.tabContent = n} className="tj-tabs-content">
                <div className="tj-tabs-nav-wrap">
                    {
                        React.Children.map(panels, (panel, i) => 
                            <div key={panel.title} className={`tj-tabs-nav ${activeIndex == i ? 'tj-tabs-nav-active' : ''}`} style={{width: 100/paneLen + "%"}} onClick={()=>this.handleTabClick(i)}>{ panel.props.title }</div>
                        )
                    }
                    <div className="tj-tabs-activebar" style={{ width: 100/paneLen + "%",marginLeft:activeIndex*100/paneLen + "%"}}></div>
                </div>
                <Carousel 
                    className="tj-tabs-pane-wrap"
                    activeIndex={activeIndex}
                    onChange={(perv, next)=>this.setState({activeIndex:next})}
                >
                    {
                        React.Children.map(panels, (panel, i) => 
                            React.cloneElement(
                                <Panel />,
                                {
                                    ...panel.props,
                                    key: panel.props.title,
                                    isActive: activeIndex === i
                                }
                            )
                        )
                    }
                </Carousel>
            </div>
        )
    }
}

Tabs.propTypes = {
    activeIndex: PropTypes.number,
    type: PropTypes.string,
    onTabChange: PropTypes.func
}

Tabs.defaultProps = {
    activeIndex: 0
}

export default Tabs