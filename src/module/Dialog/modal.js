import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'
import style from './modal.less';

class Modal extends Component {    
    constructor(props) {
        super(props);

        this.state = {
            isShow: this.props.visible
        };
    }

    componentDidMount() {
        if (this.props.visible) {
            this.enter();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible && !this.state.isShow) {
            this.enter()
        } else if(!nextProps.visible && this.state.isShow) {
            this.leave()
        }
    }

    componentWillUnmount() {
        this.leave();
    }

    /*shouldComponentUpdate(nextProps, nextState) {
        return nextProps.visible === nextState.isShow
    }*/

    changeBgs = {
        root: document.getElementById('root'),
        change() {
            const root = this.root
            if (root) {
                root.classList.add('blur-set')
            } else {
                console.info('can not fund element {#root} in html, change root element id or change Dialog->modal->changeBgs.root, for blur background');
            }
        },
        fix() {
            const root = this.root
            if (root) {
                root.classList.remove('blur-set')
            }
        }   
    }

    enter() {
        this.setState({
            isShow: true
        }) 

        setTimeout(()=>this.changeBgs.change(), 50)
    }

    leave() {
        this.setState({
            isShow: false
        });
        this.changeBgs.fix()
        this.props.onClose && !this.props.visible && this.props.onClose()
    }

    render() {
        const mask = this.state.isShow ? <div className={style.dyy} onClick={()=>this.leave()}> </div> : null
        const InnerContent = this.state.isShow ? (
                <div className={style.default}>
                    <div className={style.close} onClick={()=>this.leave()}>
                        <svg className={style.icon} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
                            <path d="M902.741333 816.213333l-306.005333-307.2 297.984-303.957333c18.858667-18.858667 18.858667-49.322667 0-68.181333s-36.010667-18.858667-54.869333 0L532.394667 444.416l-306.346667-307.541333c-18.858667-18.858667-49.322667-18.858667-68.181333 0s-18.858667 49.322667 0 68.181333L464.810667 512 157.952 818.944c-18.858667 18.858667-18.858667 49.322667 0 68.181333s49.322667 18.858667 68.181333 0L529.92 577.194667l309.930667 309.930667c18.858667 18.858667 44.032 16.128 62.805333-2.645333S921.6 835.072 902.741333 816.213333z"></path>
                        </svg>
                    </div>
                    {this.props.children}
                </div>
            ) : 
            null
        
        return (
            <div>
                <ReactCSSTransitionGroup 
                    component='div'
                    transitionName={{
                        enter: style.fadeEnter,
                        enterActive: style.fadeEnterActive,
                        leave: style.fadeLeave,
                        leaveActive: style.fadeLeaveActive
                    }} 
                    transitionEnterTimeout={200} 
                    transitionLeaveTimeout={200}
                >
                    {mask}
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup 
                    component='div'
                    transitionName={{
                        enter: style.slideEnter,
                        enterActive: style.slideEnterActive,
                        leave: style.slideLeave,
                        leaveActive: style.slideLeaveActive
                    }} 
                    transitionEnterTimeout={200} 
                    transitionLeaveTimeout={200}
                >
                    {InnerContent}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func,
    visible: PropTypes.bool,
    children:PropTypes.node
};

Modal.defaultProps = {
    visible: false
};

export default Modal;