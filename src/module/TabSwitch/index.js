import React, { PropTypes, Component } from 'react';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'
import style from './tabswitch.less';

class TabSwitch extends Component {
    constructor(props) {
        super(props)
        const activeIndex = this.props.activeIndex
        this.state = {
            activeIndex
        }
    }

    handleTabClick(i) {
        const { activeIndex } = this.state
        i !== activeIndex && this.props.onTabChange && this.props.onTabChange(activeIndex, i)

        this.setState({
            activeIndex: i
        })
    }

    render() {
        const { panels } = this.props
        const box = <div key={this.state.activeIndex} className={style.box}>{panels[this.state.activeIndex].content}</div>

        return (
            <div className={style.content}>
                <ul className={style.head}>
                {panels.map((val,i) => 
                    <li key={i} className={ this.state.activeIndex == i ? style.active : null } onClick={()=>this.handleTabClick(i)}>{val.title}</li>
                )}
                </ul>
                <div className={style.body}>
                    <ReactCSSTransitionGroup 
                        component='div'
                        transitionName={{
                            enter: style.enter,
                            enterActive: style.enterActive,
                            leave: style.leave,
                            leaveActive: style.leaveActive
                        }} 
                        transitionEnterTimeout={150} 
                        transitionLeaveTimeout={150}
                    >
                        {box}
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}

TabSwitch.propTypes = {
    activeIndex: PropTypes.number,
    panels: PropTypes.arrayOf(PropTypes.object),
    onTabChange: PropTypes.func
}

TabSwitch.defaultProps = {
    activeIndex: 1,
    panels: [
        {title: 'tab1',content: 'empty1'},
        {title: 'tab2',content: 'empty2'}
    ]
}

export default TabSwitch