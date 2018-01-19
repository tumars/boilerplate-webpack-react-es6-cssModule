import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Carousel from '../mo-carousel'
import { Panel, Nav} from './tabs-modules'
import './tabs.less';


class Tabs extends Component {
    constructor(props) {
        super(props)
        this.state =  {
            activeIndex: this.props.activeIndex
        }
        this.handleTabClick = this.handleTabClick.bind(this)
        this.handleContentChange = this.handleContentChange.bind(this)
    }
    
    static Panel = Panel

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.activeIndex !== nextState.activeIndex
    }

    handleTabClick(i) {
        const { activeIndex } = this.state
        if(i !== activeIndex) {
            this.setState({
                activeIndex: i
            })
            this.props.onTabChange && this.props.onTabChange(activeIndex, i)
        }
    }

    handleContentChange(perv, next) {
        this.setState({activeIndex:next})
    }

    render() {
        const  { activeIndex } = this.state
        if(this.props.children.length==0) {
            return 'missing Tabs Panel'
        }
        const panels = this.props.children

        return (
            <div ref={(n) => this.tabContent = n} className="tj-tabs-content">
                <Nav 
                    titles={React.Children.map(panels, panel=>panel.props.title)}
                    activeIndex={activeIndex}
                    onChange={this.handleTabClick}
                />
                <Carousel 
                    className="tj-tabs-pane-wrap"
                    activeIndex={activeIndex}
                    onChange={(perv, next)=>this.setState({activeIndex:next})}
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