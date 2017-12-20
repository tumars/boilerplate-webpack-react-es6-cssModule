import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup } from 'react-transition-group'
import { FadeTransition, PopTransition } from '../mo-transtion'
import style from './modal.less';

class Modal extends Component {    
    constructor(props) {
        super(props);

        this.state = {
            isShow: false
        };
    }

    componentDidMount() {
        this.props.visible && this.enter();
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.visible && !this.state.isShow) {
            this.enter()
        } else if(!nextProps.visible && this.state.isShow) {
            this.leave()
        }
    }

    changeBgs = {
        root: document.getElementById('root'),
        change() {
            const root = this.root
            if (root) {
                root.classList.add('blur-set')
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
        this.changeBgs.change()
    }

    leave() {
        this.setState({
            isShow: false
        });
        this.changeBgs.fix()
        this.props.onClose && this.props.onClose()
    }

    renderCloseIcon() {
        return (
            <div className={style.close} onClick={()=>this.leave()}>
                <svg className={style.icon} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
                    <path d="M902.741333 816.213333l-306.005333-307.2 297.984-303.957333c18.858667-18.858667 18.858667-49.322667 0-68.181333s-36.010667-18.858667-54.869333 0L532.394667 444.416l-306.346667-307.541333c-18.858667-18.858667-49.322667-18.858667-68.181333 0s-18.858667 49.322667 0 68.181333L464.810667 512 157.952 818.944c-18.858667 18.858667-18.858667 49.322667 0 68.181333s49.322667 18.858667 68.181333 0L529.92 577.194667l309.930667 309.930667c18.858667 18.858667 44.032 16.128 62.805333-2.645333S921.6 835.072 902.741333 816.213333z"></path>
                </svg>
            </div>
        )
    }

    renderMask() {
        const { isShow } = this.state
        return (
            <TransitionGroup>
                <FadeTransition key={isShow}>
                {
                    isShow 
                    ? <div className={style.dyy} onClick={()=>this.props.closeOnClickModal && this.leave()}> </div>
                    : <div></div>
                }
                </FadeTransition>
            </TransitionGroup>
        )
    }

    renderContent() {
        const {msg, children, showCloseIcon, isBig} = this.props
        const { isShow } = this.state
        return (
            <TransitionGroup>
                <PopTransition key={isShow}>
                {
                    isShow
                        ? <div className={style.wrapper}>
                            <div className={!isBig ? style.default : style['default-big']}>
                                {children}
                                {msg}
                            </div>
                            {showCloseIcon && this.renderCloseIcon()}
                        </div>
                        : <div></div>
                }
                </PopTransition>
            </TransitionGroup>
            
        )
    }
    render() {
        
        return (
            <div>
                {this.renderMask()}
                {this.renderContent()}
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func,
    visible: PropTypes.bool,
    children:PropTypes.node,
    msg: PropTypes.node,
    showCloseIcon: PropTypes.bool,
    isBig: PropTypes.bool,
    closeOnClickModal: PropTypes.bool
};

Modal.defaultProps = {
    visible: false,
    showCloseIcon: true,
    closeOnClickModal: false
};

export default Modal;