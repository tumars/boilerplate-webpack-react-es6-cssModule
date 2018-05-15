import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup } from 'react-transition-group'
import { FadeTransition} from '../mo-transtion'

import './toast.less'

var classNames = require('classnames');


const icons = {
  error: require('./assets/error.svg'),
  info: require('./assets/info.svg'),
  success: require('./assets/success.svg'),
  warning: require('./assets/warning.svg')
}

class Toast extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: this.props.visible
        };
    }

    componentDidMount() {
        this.setState({
            isVisible: true
        }) 
        this.startTimer();
    }

    componentWillUnmount() {
        this.stopTimer();
    }
    
    onClose() {
        this.stopTimer();
        this.setState({
            isVisible: false
        });

        const { onClose } = this.props;
        if(onClose instanceof Function) {
            onClose();
        }
    }

    startTimer() {
		if (this.props.duration > 0) {
			this.timeout = setTimeout(() => { 
                !this.props.showClose && this.onClose() 
            }, this.props.duration)
		}
    }

    stopTimer() {
        clearTimeout(this.timeout);
    }

    renderContent() {
        const { iconClass, className, type } = this.props;
        const { isVisible } = this.state 
        const boxClassNames = classNames(
            'tj-toast', 
            {'tj-toast--hasicon': type !== 'text'},
            className
        )
        return (
            <div 
                className={boxClassNames} 
                onMouseEnter={this.stopTimer.bind(this)} 
                onMouseLeave={this.startTimer.bind(this)}
                style={{display: isVisible ? 'block' : 'none' }}
            >
                { iconClass && <i className={this.classNames('tj-toast-icon', iconClass)}></i> }
                { !iconClass && type !== 'text' && <img className="tj-toast-img" src={icons[type]} /> }
                { this.props.content }
                { this.props.showClose && <div className="tj-toast-close tj-iconfont tj-icon-close" onClick={this.onClose.bind(this)}></div> }
            </div>
        )
    }

    render() {
        const { isVisible } = this.state 
        
        return (
            <TransitionGroup>
                <FadeTransition key={isVisible}>  
                    { this.renderContent() }
                </FadeTransition>
            </TransitionGroup>
        );
    }
}

Toast.propTypes = {
    type: PropTypes.oneOf(['text', 'success', 'warning', 'info', 'error', 'loading']),
    content: PropTypes.string.isRequired,
    duration: PropTypes.number,
    showClose: PropTypes.bool,
    className: PropTypes.string,
    iconClass: PropTypes.string
};

Toast.defaultProps = {
    type: 'text',
    duration: 3000,
    showClose: false
};

export default Toast;