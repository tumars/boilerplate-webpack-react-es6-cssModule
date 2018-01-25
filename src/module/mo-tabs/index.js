import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Carousel from '../mo-carousel'
import { Panel, Nav} from './tabs-modules'
import './tabs.less';


class Tabs extends Component {
    static Panel = Panel
    constructor(props) {
        super(props)
        this.state =  {
            activeIndex: this.props.activeIndex
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.activeIndex !== nextState.activeIndex) {
            return true
        }
        if(this.props.children !== nextProps.children) {
            return true
        }
        return true
    }

    handleChange(nextIndex) {
        const { activeIndex } = this.state
        if(nextIndex !== activeIndex) {
            this.setState({
                activeIndex: nextIndex
            })
            this.props.onTabChange && this.props.onTabChange(activeIndex, nextIndex)
        }
    }

    render() {
        const  { activeIndex } = this.state
        if(this.props.children.length==0) {
            return 'missing Tabs Panel'
        }
        const panels = this.props.children

        return (
            <div ref={(n) => this.tabContent = n} className="tj-tabs__content">
                <Nav 
                    titles={React.Children.map(panels, panel=>panel.props.title)}
                    activeIndex={activeIndex}
                    onChange={this.handleChange}
                />
                <Carousel 
                    className="tj-tabs__pane-wrap"
                    activeIndex={activeIndex}
                    onChange={(perv, next)=>this.handleChange(next)}
                >
                    {
                        React.Children.map(panels, (panel, i) => 
                            React.cloneElement(
                                panel,
                                {
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